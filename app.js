var app = angular.module('calculatorApp',[]);

app.controller('CaclculatorController',function($scope){
$scope.reult =0;
$scope.Plus= function(value){ 
    $scope.result =$scope.number1+ $scope.number2
}
$scope.Minus= function(value){ 
    $scope.result =$scope.number1- $scope.number2
}
$scope.Divde= function(value){ 
    $scope.result =$scope.number1/ $scope.number2
}
$scope.Mul= function(value){ 
    $scope.result =$scope.number1* $scope.number2
}
});

