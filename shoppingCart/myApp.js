var myApp=angular.module('myApp',[]);

myApp.controller('CartController',['$scope',function($scope){
	$scope.items=[
			{
				title:'商品1',quantity:8,price:3.95
			},
			{
				title:'商品2',quantity:9,price:8.95
			},
			{
				title:'商品3',quantity:10,price:4.95
			}
		];
	$scope.remove=function(index){
		$scope.items.splice(index,1);
	}
	console.log($scope.items)
}]);