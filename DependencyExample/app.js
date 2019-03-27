(function(){
  'use strict';
  angular.module('DI',[])
  .controller('DIController', DIController);
  DIController.$inject=['$scope','$filter'];
  function DIController($scope,$filter,$injector)
  {
    $scope.name="Vipul";

    $scope.upper=function()
    {
    var upperCase=$filter('uppercase');
    $scope.name=upperCase($scope.name);
    };
  }
})();
