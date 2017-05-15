'use strict';

angular.module('spotifyApp')
.controller('trackCtrl', ['$scope', '$http', 'searchService','$stateParams', function ($scope, $http, searchService,$stateParams) {
  
    $scope.tracks = [];
    $scope.text=$stateParams.albumId;
    console.log($scope.text);

    function getResult(){
 		$http.get('https://api.spotify.com/v1/albums/' + $scope.text + '/tracks')
			.then(function(response){
				$scope.tracks = response.data.items;
			},function(){});
    }
    getResult();
    console.log($scope.tracks);
  }]);