
angular.module('translateApp')
	.controller('translateTroller', ['$scope', '$http', 'translateFactory', function ($scope, $http, translateFactory){

	$scope.languageCodes = translateFactory.languageCodes
	$scope.quizWords = translateFactory.quizWords

	$scope.translate = function(){
		$http.post('/trans', $scope.translateText)
			.then(function(returnData){
				$scope.translatedText = returnData.data
			})
		}

	$scope.submitQuiz = function(words){
		$http.post('/trans', $scope.translateText)
			.then(function(returnData){
				$scope.translatedText = returnData.data
			})
		}
}]);