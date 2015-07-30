var myApp=angular.module('myApp',[]);

myApp.controller('StudentList',function($scope){
	$scope.students = [{"name":"code_bunny","score":"100","id":"001"},{"name":"white_bunny","score":"90","id":"002"},{"name":"black_bunny","score":"80","id":"003"}];
    $scope.insertDog = function(){
        $scope.students.splice($scope.students.length,0,{"name":"code_dog","score":"101","id":"004"})
    };
    $scope.delLast = function(){
        $scope.students.splice(-1,1)
    }
});