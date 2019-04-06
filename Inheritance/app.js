(function(){
  'use strict';
  angular.module('Inheritance',[])
  .controller('ParentController',ParentController)
  .controller('ChildController',ChildController);

  function ParentController(){
    var parent=this;
    parent.value=5;
   }

  function ChildController(){
    var child=this;
    child.value=1;

  }
})();
