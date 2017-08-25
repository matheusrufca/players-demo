/**
 * The controller doesn't do much more than setting the initial data model
 */
angular
	.module("clappr", ['ngResource'])
	.factory('streamsService', ['$resource', function ($resource) {
		return $resource('resources/streams.json');
	}])
	.controller("ClapprController", ['$rootScope', '$scope', '$http', 'streamsService', 'Notification', function ($rootScope, $scope, $http, streamsService, logService) {
		$scope.streamUrl = '';
		$scope.playerConfigs = {};

		$scope.sources = {};

		$scope.vizzto = {
			'format': 'hls',
			'quality': 'hd'
		};

		$scope.loadPlayer = function () {
			var content, streamUrl, options;
			content = $scope.sources.selected;
			options = JSON.parse($scope.playerConfigs.options || "{}");

			if (content.baseUrl) {
				streamUrl = buildVizttoUrl(content.baseUrl, $scope.vizzto);
			} else {
				streamUrl = content.streamUrl;
			}


			options = angular.extend(options, {
				withCredentials: $scope.playerConfigs.withCredentials,
				externalTracks: $scope.textTracks,
				subtitle: {
					src: "subtitles/en-US.srt",
					auto: true, // automatically loads subtitle
					backgroundColor: 'transparent',
					fontWeight: 'normal',
					fontSize: '14px',
					color: 'yellow',
					textShadow: '1px 1px #000'
				},
				scrubThumbnails: {
					backdropHeight: 64,
					spotlightHeight: 84,
					thumbs: [{
							time: 0,
							url: "http://tjenkinson.me/clappr-thumbnails-plugin/assets/thumbnails/thumb_1.jpg"
						},
						{
							time: 2,
							url: "http://tjenkinson.me/clappr-thumbnails-plugin/assets/thumbnails/thumb_2.jpg"
						},
						{
							time: 3,
							url: "http://tjenkinson.me/clappr-thumbnails-plugin/assets/thumbnails/thumb_3.jpg"
						},
						{
							time: 4,
							url: "http://tjenkinson.me/clappr-thumbnails-plugin/assets/thumbnails/thumb_4.jpg"
						},
						{
							time: 5,
							url: "http://tjenkinson.me/clappr-thumbnails-plugin/assets/thumbnails/thumb_5.jpg"
						},
						{
							time: 6,
							url: "http://tjenkinson.me/clappr-thumbnails-plugin/assets/thumbnails/thumb_6.jpg"
						}
					]
				},
				shakaConfiguration: {
					preferredAudioLanguage: 'pt-BR',
					streaming: {
						rebufferingGoal: 15
					}
				},
				shakaOnBeforeLoad: function (shaka_player) {
					// shaka_player.getNetworkingEngine().registerRequestFilter() ...
				}
			});

			window.player = clapprHelper.initPlayer(streamUrl, options);
		};

		var clapprHelper = (function (window, logService) {
			var self = {}

			self.player = {};

			self.getContainer = function () {
				return document.getElementById('clappr-container');
			};

			var defaultOptions = {
				//parentId: 'clappr-container',		
				width: "100%",
				//height: "100%",
				plugins: [LevelSelector, AudioTrackSelector, ClapprSubtitle, ClapprThumbnailsPlugin, DashShakaPlayback,Smooth],
				events: {
					onError: function (e) {
						//this.show();
						logService.error("Error on playing video");
						// Here the code to handle the error
						//toastr.error(JSON.stringify(e));
					}
				}
			};


			function clearContainer() {
				var container;
				container = self.getContainer() || {};
				container.innerHTML = '';
			};

			self.initPlayer = function (streamUrl, options) {
				var container = self.getContainer();
				clearContainer();

				options = angular.extend(defaultOptions, options || {});
				options.source = streamUrl;

				if (JSON.parse(options.withCredentials || false)) {
					angular.extend(options, {
						hlsjsConfig: {
							xhrSetup: function (xhr, url) {
								xhr.withCredentials = true;
								//xhr.header('Access-Control-Allow-Origin', '*')
								//xhr.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
							}
						}
					});
				}

				try {
					self.player = new Clappr.Player(options || defaultOptions);
					self.player.attachTo(container);

					$rootScope.$broadcast('player:loaded', {
						playerOptions: options || defaultOptions
					})
				} catch (err) {
					//toastr.error(err);
					logService.error(err);
				}
			};

			return self;
		})(window, logService);


		$scope.subtitles = [{
			id: 1,
			lang: 'pt-BR',
			label: 'Português .vtt',
			src: 'subtitles/pt-BR.vtt'
		}, {
			id: 2,
			lang: 'en-US',
			label: 'Inglês .vtt',
			src: 'subtitles/en-US.vtt'
		}];

		$scope.textTracks = [ // Add external <track> (if supported by browser, see also https://www.w3.org/TR/html5/embedded-content-0.html#the-track-element)
			{
				lang: 'pt-BR',
				label: 'Português',
				src: 'subtitles/pt-BR.vtt',
				kind: 'subtitles'
			}, {
				lang: 'en-US',
				label: 'Inglês',
				src: 'subtitles/en-US.vtt',
				kind: 'subtitles'
			}
		];


		$rootScope.$on('player:loaded', function (event, data) {
			$scope.playerConfigs.current = data.playerOptions;
		});

		$scope.$watch('sources.selected', function (newValue, oldValue) {
			if (newValue == oldValue) {
				return;
			}

			$scope.loadPlayer();
		});


		$scope.changeSubtitle = function (subtitle) {
			var video = document.querySelector('video');
			angular.forEach($scope.subtitles || [], function (item, i) {
				if (item.id == subtitle.id) {
					video.textTracks[i].mode = 'showing';
				} else {
					setTimeout(function () {
						video.textTracks[i].mode == 'disabled';
					}, 1000);
				}
			});
		};

		$scope.getCookies = function () {
			$http
				.get('http://cookie.vizzto.net/')
				.then(function (data) {
					logService.info('Cookies retrieved ' + JSON.stringify(data));
					console.debug('Cookies retrieved', data);
				});
		};

		$scope.viewOptions = function () {
			return viewJson($scope.playerConfigs.current);
		};


		streamsService.query(function (data) {
			$scope.sources.options = data || [];
		});
	}]);


var subtitlesMenu;
var captionMenuButtons = [];



window.vizztoStreamsSuffixes = {
	'dash': 'dash/video/{quality}/video.mpd',
	'smooth': 'mss/video/{quality}/video.ism/Manifest',
	'hls': 'hls/video/{quality}/video.m3u8',
};

function viewJson(jsonString) {
	var output = {};

	try {
		output = JSON.parse(jsonString || null);
	} catch (err) {}
	return output;
};

function buildVizttoUrl(baseUrl, configs) {
	var suffix;

	suffix = vizztoStreamsSuffixes[configs.format];
	suffix = suffix.replace('{quality}', configs.quality);

	return [baseUrl, suffix].join('/');
};