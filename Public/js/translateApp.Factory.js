
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

	var quizWords = [

	{
		word : 'Monkey',
		id : 'en'
	},
	{
		word : 'Discuss',
		id : 'en'
	},
	{
		word :'Code',
		id : 'en'
	},
	{
		word : 'Stupid',
		id : 'en'
	},
	{
		word : 'Defer',
		id : 'en'
	},
	{
		word : 'Zealous',
		id : 'en'
	},
	{
		word : 'Tact',
		id : 'en'
	},
	{
		word : 'Frustrate',
		id : 'en'
	},
	{
		word : 'Turtle',
		id : 'en'
	},
	{
		word : 'Beer',
		id : 'en'
	}
 
	]

	return {
		languageCodes : languageCodes,
		quizWords 	: quizWords
	}
	}])

