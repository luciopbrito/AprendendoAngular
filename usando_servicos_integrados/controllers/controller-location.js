app.controller('urlController', function ($scope, $location) {
    $scope.returnUrl = $location.absUrl();
});