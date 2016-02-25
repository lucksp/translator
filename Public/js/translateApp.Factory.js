
angular.module('translateApp')
	.factory('translateFactory', ['$http', function($http){
		
	var languageCodes = [

		{
			language : 'Afrikaans',
			id : 'af'
		},
		{
			language : 'Albanian',
			id : 'sq'
		},
		{
			language : 'Arabic',
			id : 'ar'
		},
		{
			language : 'Armenian',
			id : 'hy'
		},
		{
			language : 'Azerbaijani',
			id : 'az'
		},
		{
			language : 'English',
			id : 'en'
		},
		{
			language : 'Spanish',
			id : 'es'
		}
 
	]

	return {
		languageCodes : languageCodes
	}
	}])

