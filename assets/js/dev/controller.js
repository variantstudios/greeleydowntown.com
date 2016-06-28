var app = angular.module('mainApp', ['angularUtils.directives.dirPagination'])

.controller('DirectoryCtrl', ['$scope', '$http', function($scope, $http) {

	$scope.loading = true;

	$http.get('/directory.json')
	.success(function(response) {
		$scope.businesses = response.records;
	})
    .catch(function (err) {
      // Log error somehow.
    })
    .finally(function () {
      // Hide loading spinner whether our call succeeded or failed.
      $scope.loading = false;
    });

	$http.get('/entertainment-and-recreation-categories.json')
	.success(function(data) {
		$scope.entertainment = data.records;
	});
	$http.get('/lodging-and-event-centers-categories.json')
	.success(function(data) {
		$scope.lodging = data.records;
	});
	$http.get('/nightlife-categories.json')
	.success(function(data) {
		$scope.nightlife = data.records;
	});
	$http.get('/retail-categories.json')
	.success(function(data) {
		$scope.retail = data.records;
	});
	$http.get('/service-categories.json')
	.success(function(data) {
		$scope.service = data.records;
	});
	$http.get('/dining-categories.json')
	.success(function(data) {
		$scope.dining = data.records;
	});
	$scope.pageChanged = function() {
   		 $('html,body').animate({scrollTop: 310}, 500);
	};
}]);
