angular
	.module("orange", [])
	.factory('theoInfo', function () {
		return {
			title: 'THEO player',
			url: 'https://www.theoplayer.com/demo-zone',
			demos: [
				'https://demo.theoplayer.com/multi-language-multi-audio',
				'https://demo.theoplayer.com/closed-captions-subtitles',
				'https://demo.theoplayer.com/language-localization-feature',
				'https://demo.theoplayer.com/drm-aes-128-encryption'
			]
		};
	})
	.controller("TheoController", ['$rootScope', '$scope', '$http', 'broadcastService', 'streamsService', 'Notification', 'theoInfo',
		function ($rootScope, $scope, $http, broadcastService, streamsService, logService, playerInfo) {
			broadcastService.send('app.navigation:changed', playerInfo);
		}
	]);