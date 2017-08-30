angular
	.module("bitmovin", [])
	.factory('bitmovinInfo', function ($rootScope) {
		return {
			title: 'Bitmovin',
			url: 'https://bitmovin.com/demo/',
			description: 'The Bitmovin Adaptive Streaming Player is easy to set up and runs natively in HTML5, so there is no need plugins. It is 360 and VR ready, DRM ready, ad server ready and backed up by an awesome support team. Below is a selection of demos showcasing some of the many features available.'			
		};
	})
	.controller("BitmovinController", ['$rootScope', '$scope', '$http', 'broadcastService', 'streamsService', 'Notification', 'bitmovinInfo',
		function ($rootScope, $scope, $http, broadcastService, streamsService, logService, playerInfo) {
			broadcastService.send('app.navigation:changed', playerInfo);
		}
	]);