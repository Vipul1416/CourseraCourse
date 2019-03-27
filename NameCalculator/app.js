(function(){
  'use strict';
  angular.module('nameCalculator',[])
  .controller('nameCalculatorController',function($scope){
  $scope.name="";
  $scope.totalValue=0;
  $scope.displaynamevalue=function()
  {
    var value=calculate($scope.name);
    $scope.totalValue=value;
  };
  function calculate(string)
  {
    var totals=0;
    for(var x=0;x<string.length;x++)
    {
      totals+=string.charCodeAt(x);
    }
    return totals;

  }
  });
})();
