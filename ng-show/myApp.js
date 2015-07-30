var myApp=angular.module('myApp',[]);

myApp.controller('tabController',function($scope){
	$scope.text='点击显示';
	$scope.isShow=false;
	
	$scope.toggle=function(){
		$scope.isShow=!$scope.isShow;
		$scope.text=$scope.text==='点击显示'?'点击隐藏':'点击显示';
	}
});