(function(){
  angular.module('LunchChecker',[])
  .controller('LunchCheckerController',LunchChecker);
  LunchChecker.$inject=["$scope"];
  function LunchChecker($scope)
  {
    $scope.items=" ";
    $scope.messa="";
    $scope.Check=function()
    {
      var value=calculate($scope.items)

      if($scope.items==" ")
      {
        $scope.messa= "Please Enter the Data First";
      }
      else{
        if(value>3){
          $scope.messa="Too Much!";
        }else {
          $scope.messa="Enjoy!";
        }
      }
    };
  function calculate(string)
  {
    var words=string.split(',');
    return words.length;
  }

  }
})();
