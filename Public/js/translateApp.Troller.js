
angular.module('translateApp')
	.controller('translateTroller', ['$scope', '$http', function ($scope, $http){

	$scope.translate = function(){
		$http.post('/trans', $scope.translateText)
			.then(function(returnData){
				$scope.translatedText = returnData.data
			})
		
		// $http.get('/trans')
		// 	.then(function(returnData){
		// 		$scope.translateText = returnData.data
		// 	})
		}
	}])