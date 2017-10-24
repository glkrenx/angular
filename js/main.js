/**
 * AngularJS
 * @author Wahyu Sanjaya <wahyu.sanjaya@emeriocorp.com>
 */

var mainApp = angular.module('mainApp', [
  'ngRoute'
]);

mainApp.config(function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "templates/page.html", controller: ""})
    // else 404
    .otherwise("/404", {templateUrl: "templates/404.html", controller: ""});
});

// mainApp.controller("globalController", function($scope, $http) {
//   $scope.message = "In global controller";
//   $scope.type = "Global";
// });

mainApp.controller("globalController", function($scope, $http) {
  $scope.message = "In global controller";
  $scope.type = "Global";

  $scope.listData = {
    subjects: [{
      name: 'Fisika',
      marks: '70'
    },
    {
      name: 'Kimia',
      marks: '80'
    },
    {
      name: 'Matematika',
      marks: '65'
    }
  ]};

  $http({
    method: 'GET',
    url: 'http://127.0.0.1:3000/bootcamp/location.json'
  }).then(function successCallback(response) {
    console.log("Successfully");
    $scope.listData = response;
  }, function errorCallback(response) {
    console.log(error);
  });
});

mainApp.factory('MathService', function(){
  var factory = {};
  factory.multiply = function(a, b){
    return a + b;
  }

  factory.kurang = function(a, b){
    return a - b;
  }

  factory.kali = function(a, b){
    return a * b;
  }

  factory.bagi = function(a, b){
    return a / b;
  }
  return factory;
});

mainApp.service('CalcService', function(MathService){
  this.square = function(a, b){
    return MathService.multiply(a, b);
  }
  this.kurang = function(a, b){
    return MathService.kurang(a, b);
  }

  this.kali = function(a, b){
    return MathService.kali(a, b);
  }

  this.bagi = function(a, b){
    return MathService.bagi(a, b);
  }
});

mainApp.controller('KurangController', function($scope, CalcService){
  $scope.kurang = function(){
    $scope.result = CalcService.kurang($scope.numberOne, $scope.numberTwo);
  }
  $scope.kali = function(){
    $scope.result = CalcService.kali($scope.numberOne, $scope.numberTwo);
  }
  $scope.square = function(){
    $scope.result = CalcService.square($scope.numberOne, $scope.numberTwo);
  }

  $scope.bagi = function(){
    $scope.result = CalcService.bagi($scope.numberOne, $scope.numberTwo);
  }
});

mainApp.controller("firstController", function($scope) {
  $scope.message = "In first controller";
});

mainApp.controller("secondController", function($scope) {
  $scope.message = "In second controller";
  $scope.type = "Second";
});
