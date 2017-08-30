angular
	.module("shaka", [])
	.factory('shakaInfo', function () {
		return {
			title: 'Shaka player',
			url: 'https://shaka-player-demo.appspot.com/demo/',
			git: 'https://github.com/google/shaka-player',
			description: 'JavaScript player library / DASH client / MSE-EME player'
		};
	})
	.controller("ShakaPlayerController", ['$rootScope', '$scope', '$http', 'broadcastService', 'streamsService', 'Notification', 'shakaInfo',
		function ($rootScope, $scope, $http, broadcastService, streamsService, logService, playerInfo) {

			broadcastService.send('app.navigation:changed', playerInfo);
		}
	]);