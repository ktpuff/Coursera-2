(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);
 LunchCheckController.$inject = ["$scope"];

 function LunchCheckController($scope) {
        $scope.lunch = "";
        $scope.message = "";
        $scope.checked = false;

        $scope.checkingLunch = function() {
            if ($scope.lunch.trim().length === 0) {
                $scope.empty = true;
            } else {
                $scope.checked = true;
                $scope.empty = false;
                var arraylunch = $scope.lunch.split(',');
                var arraylunchNotEmpty = arraylunch.filter(function(a) {
                    return a.trim() !== '';
                });

                if (arraylunchNotEmpty.length <= 3) {
                    $scope.message = 'Enjoy!';
                } else {
                    $scope.message = 'Too much!';
                }
            }
        };
}

})();