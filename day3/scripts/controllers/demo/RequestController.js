hrApp.controller('RequestController', ['$scope', function($scope){

    $scope.jobList = [];

//    TODO #10 - make AJAX call


    $scope.jobList=$.get('http://demo.teamnet.ro:8282/hrapp/jobs', employees, function() {});


}]);
