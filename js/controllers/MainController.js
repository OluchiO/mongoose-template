angular.module('myApp')

.controller('MainController', function ($scope, dataService, $http) {
	

	//example method
	$scope.submitForm = function () {
		console.log($scope.user);
	}

	//example get data with dataService
	$scope.getData = function () {
		dataService.getData()
		.then(function (response) {
			console.log('response on controller:', response);
			$scope.items = response;
		})
		.catch(function (err) {
			throw new Error(err);
		})
	}


})