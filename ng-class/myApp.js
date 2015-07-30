var myApp=angular.module('myApp',[]);

myApp.controller('Restaurant',function($scope){
	$scope.selRow =0;
    $scope.restaurants = [
        {"name":"happy lemon","food":"greenTea","price":"￥15"},
        {"name":"coco","food":"milkTea","price":"￥10"},
        {"name":"good fruit","food":"fruits","price":"￥20"}
    ];
    $scope.choose = function(i){
        $scope.selRow = i
    }
});