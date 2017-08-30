angular.module('libraries', ['ngRoute', 'ngResource', 'ngSanitize', 'ui.select', 'ui-notification']);


angular.module("app", ['libraries', 'clappr', 'shaka', 'orange', 'bitmovin', 'demo1'])
	.config(function ($routeProvider, $locationProvider) {
		$locationProvider.hashPrefix('');
		$routeProvider
			.when('/clappr', {
				templateUrl: 'views/clappr/clappr.html',
				controller: 'ClapprController'
			})
			.when('/orange', {
				templateUrl: 'views/orange/orange.html',
				controller: 'OrangeController'
			})
			.when('/bitmovin', {
				templateUrl: 'views/bitmovin/bitmovin.html',
				controller: 'BitmovinController'
			})
			.when('/shaka-player', {
				templateUrl: 'views/shaka-player/shaka-player.html',
				controller: 'ShakaPlayerController'
			})
			.when('/theo', {
				templateUrl: 'views/theo/theo.html',
				controller: 'TheoController'
			})
			.when('/demo1', {
				templateUrl: 'views/demo1/demo1.html',
				controller: 'Demo1Controller'
			})
			.otherwise({
				redirectTo: '/clappr'
			});
	})
	.directive('navigation', function ($rootScope, $location) {
		return {
			template: '<li ng-repeat="option in options" ng-class="{active: isActive(option)}">' +
				'    <a ng-href="{{option.href}}">{{option.label}}</a>' +
				'</li>',
			link: function (scope, element, attr) {
				scope.options = [{
					label: "Clapper",
					href: "#/clappr"
				}, {
					label: "Shaka player",
					href: "#/shaka-player"
				}, {
					label: "Bitmovin",
					href: "#/bitmovin"
				}, {
					label: "Orange player",
					href: "#/orange"
				}, {
					label: "THEO player",
					href: "#/theo"
				}, {
					label: "Demo 1",
					href: "#/demo1"
				}];

				scope.isActive = function (option) {
					return option.href.indexOf(scope.location) === 1;
				};

				$rootScope.$on("$locationChangeSuccess", function (event, next, current) {
					scope.location = $location.path();
				});
			}
		};
	})
	.factory('broadcastService', function ($rootScope) {
		return {
			send: function (msg, data) {
				$rootScope.$broadcast(msg, data);
			}
		}
	})
	.controller('MainController', ['$rootScope', '$scope', '$window', function ($rootScope, $scope, $window) {
		$scope.playerInfo = {};

		$scope.getScreenSize = function () {
			return [$window.screen.width, $window.screen.height].join('x');
		};

		$scope.getWindowSize = function () {
			return [$window.innerWidth, $window.innerHeight].join('x');
		};

		$scope.getScreenSize = function () {
			var output = [$window.screen.width, $window.screen.height].join('x');
			return output;
		};

		$scope.getPlatform = function () {
			var platform = cordova.require('cordova/platform');

			return platform;
		};

		$scope.getUserAgent = function () {
			return $window.navigator.userAgent;
		};

		$scope.getAppVersion = function () {
			return $window.navigator.appVersion;
		};


		$scope.$on('app.navigation:changed', function (event, eventData) {

			$scope.playerInfo = angular.extend({}, eventData);
		});
	}]);