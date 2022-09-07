var app = angular.module('app', [])
app.controller('httpController', function ($scope, $http) {
    $http.get('return-http.html').then(function (response) {
        $scope.returnResponseData = response.data;
    });
});