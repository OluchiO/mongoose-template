angular.module('myApp')

.factory('dataService', function ($http, $q) {
	var service = {}


	// example method
	service.getData = function () {
		var deferred = $q.defer();

		// example api end point
		$http.get('/api/get')
		.success(function (response) {
			deferred.resolve(response);
		})
		.error(function (err) {
			deferred.reject(err);
		});

		return deferred.promise;
	}




	return service;
});