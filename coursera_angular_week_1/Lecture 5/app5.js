(function () {
'use strict';

angular.module('myFirstApp', [])

/*this scope is available inside my ng-controller or anything 
below it or inside of it that this ng-controller is in charge of.
*/
.controller('MyFirstController', function ($scope) {
  $scope.name = "Yaakov";
  $scope.sayHello = function () {
    return "Hello Coursera!";
  };
});

})();