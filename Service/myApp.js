var myApp=angular.module('myApp',[]);

//服务Items

myApp.factory('Items',['$http',function($http){
	 var doRequest =function(){
	 	return $http({
	 		method:'GET',
	 		url:'animal.json'
	 	});
	 };
	 return {
	 	events: function() { 
	 		return doRequest(); 
	 	}
	 }
}]);

//控制器

myApp.controller('CartController',function($scope,Items){
	
	Items.events() 
    .success(function(data, status, headers) { 
           
      	$scope.items = data;
	    $scope.remove = function(index){
	        $scope.items.splice(index,1)
	    };
	    $scope.bill = {
	        "all":0,
	        "discount":0,
	        "now":0
	    };
	    $scope.compute = function(){
	        var total = 0;
	        for(var i=0; i<$scope.items.length; i++){
	            total += $scope.items[i].quantity*$scope.items[i].price;
	        }
	        $scope.bill.all = total;
	        $scope.bill.discount = total >= 500 ? total*0.1 : 0 ;
	        $scope.bill.now = $scope.bill.all - $scope.bill.discount
	    };
	    $scope.$watch('items',$scope.compute,true);

    });
   
});