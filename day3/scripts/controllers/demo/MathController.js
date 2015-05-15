hrApp.controller('MathController', ['$scope','MathServices', function($scope.MathServices){
    
    $scope.calculate = function() {
        $scope.op1 = $scope.a+$scope.b;
        $scope.op2 = $scope.a-$scope.b;
        $scope.op3 = $scope.a*$scope.b;
        $scope.op4 = $scope.a/$scope.b;

//        TODO #8 calculate op1, op2, op3, op4

//        TODO #13 refactor your calculations using MathService
    }

}]);
