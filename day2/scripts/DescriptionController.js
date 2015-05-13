/**
 * Created by rares on 5/12/2015.
 */
angular.module("hrApp").controller('DescriptionController'['$scope','$rootscope',function($scope,$rootscope){

    $scope.title = 'Two way binding demo'
    $scope.childtemplate = 'templates/childscope.html'

    $scope.resetFirstVariable = function resetFirstVariable(){
        $scope.resetFirstVariable = undefined;


    };

    $scope.resetFirstVariable = function resetFirstVariable(val){
        $scope.resetFirstVariable = val;


    };

    $scope.toggleDescriptionShow = true;

$scope.toggleDescriptionShow = function toggleDescriptionShow(){
    console.log("Butonul a fost apasat")
}
    }]);