angular.module("myApp", [])
.controller('mainCtrl', function($scope){
	$scope.books = [
		{title: 'ManU', price: 300},
		{title: 'Liver', price: 500},
		{title: 'Chelsea', price: 800}
	];
 })