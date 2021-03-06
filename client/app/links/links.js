angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, Auth) {
  $scope.data = {};
  $scope.getAll = function () {
    Links.getAll()
      .then(function(data) {
        console.log('This is the data from getAll', data);
        $scope.data.links = data;
      })
      .catch(function(error) {
        console.error(error);
      });
  };

  $scope.getAll();
});
