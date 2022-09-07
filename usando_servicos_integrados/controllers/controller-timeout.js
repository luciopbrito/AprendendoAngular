app.controller('timeoutController', function ($scope, $timeout) {
    $scope.message = "Hello World";
    $timeout(function () {
        $scope.message = "Do you ready for learn?"
    }, 10000);
});