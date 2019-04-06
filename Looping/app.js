(function()
{
  'use strict';
  var names=['Vipul','Sarthak','Rupesh','Nidhi'];
  angular.module('Repeat',[])
  .controller('RepeatController',RepeatFunction);
  RepeatFunction.$inject=['$scope'];
  function RepeatFunction($scope){
    $scope.familyNames=names;
    $scope.AddMember=function (){
      var v=$scope.newFamilyMember;
      $scope.familyNames.push(v);
    };

  }

})();
