var myApp=angular.module('myApp',[]);

myApp.controller('Watch',function($scope){
	$scope.number = 0;
    $scope.count = function(newValue,oldValue,scope){
        $scope.result = $scope.number*3;
        console.log('newValue: '+newValue);
        console.log('oldValue: '+oldValue);
        console.log('scope: '+scope);
        return $scope.result
    };
    $scope.$watch('number',$scope.count,false)
});