(function()
{
  'use strict';
  angular.module('Filters',[])
  .controller('FilterController',Ctrl)
  .filter('custom',CustomFilterFatory);
  function CustomFilterFatory()
  {
    return function(input)
    {
      return changedInput;
    };
  }
  Ctrl.$inject=['$scope','customFilter'];
  function Ctrl($scope,customFilter)
  {
    var msg="Vipul";
    customFilter(msg);
  }
})();
