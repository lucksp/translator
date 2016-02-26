
angular.module('translateApp')
	.controller('translateTroller', ['$scope', '$http', 'translateFactory', function ($scope, $http, translateFactory){

	$scope.languageCodes = translateFactory.languageCodes
	console.log($scope.languageCodes)

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