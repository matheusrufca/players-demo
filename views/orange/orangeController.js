/**
 * The controller doesn't do much more than setting the initial data model
 */
angular
	.module("orange", [])
	.factory('hasInfo', function () {
		return {
			title: 'HAS Javascript Player',
			url: 'http://dashif.org/software/',
			git: 'https://github.com/Dash-Industry-Forum/dash.js',
			description: 'A reference client implementation for the playback of MPEG DASH via Javascript and compliant browsers.'
		};
	})
	.controller("OrangeController", ['$rootScope', '$scope', '$http', 'broadcastService', 'streamsService', 'Notification', 'hasInfo',
		function ($rootScope, $scope, $http, broadcastService, streamsService, logService, playerInfo) {
			broadcastService.send('app.navigation:changed', playerInfo);
		}
	]);