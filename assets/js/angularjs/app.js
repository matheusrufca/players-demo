angular.module('libraries', ['ngRoute', 'ngResource', 'ngSanitize', 'ui.select', 'ui-notification']);


angular.module("app", ['libraries', 'clappr', 'demo1'])
	.config(function ($routeProvider, $locationProvider) {
		$locationProvider.hashPrefix('');
		$routeProvider
			.when('/clappr', {
				templateUrl: 'clappr/clappr.html',
				controller: 'ClapprController'
			})
			.when('/demo1', {
				templateUrl: 'demo1/demo1.html',
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
	.controller('MainController', ['$scope', '$window', function ($scope, $window) {


		
		$scope.title = "clappr";
		$scope.url = "https://github.com/clappr/clappr";
		$scope.description = "An extensible media player for the web. http://clappr.io";

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
	}]);