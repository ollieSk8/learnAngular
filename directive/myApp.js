var myApp=angular.module('myApp', []);

myApp.controller('someController',function($scope){
	$scope.content=[
		{
			title:'github is cool',
			text:'some cooler thing in here'
		},
		{
			title:'love vans forever',
			text:'vans is a skatebording brand'
		},
		{
			title:'diseny is yard',
			text:'bala bala bala'
		}
	]
});

myApp.directive('expander',function(){
	return {
		restrict:'EA',
		replace:true,
		transclude:true,
		scope:{
			title:'@expanderTitle'
		},
		template:'<div class="expender">'+
					'<h1 ng-click="toggle()">{{title}}</h1>'+
					'<div class="content" ng-transclude ng-show="isShow"></div>'+
				 '</div>',
		link:function(scope,elem,attr){
			scope.isShow=false;
			scope.toggle=function(){
				scope.isShow=!scope.isShow;
			}
		}


	}
})