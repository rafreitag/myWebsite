var myNinjaApp = angular.module('myWebsite', ['ngRoute', 'ngAnimate']);

myNinjaApp.config(['$routeProvider', function($routeProvider){

  $routeProvider
    .when('/home', {
      templateUrl: 'views/home.html',
      controller: 'HomeController'
    })
    .when('/contact', {
      templateUrl: 'views/contact.html',
      controller: 'ContactController'
    })
    .when('/contact-success', {
      templateUrl: 'views/contact-success.html',
      controller: 'ContactController'
    })
    .when('/projects', {
      templateUrl: 'views/projects.html',
      controller: 'HomeController'
    })
    .otherwise({
      redirectTo: '/home'
    });
}]);

myNinjaApp.controller('HomeController', ['$scope', '$http', function($scope, $http) {

  $scope.removeNinja = function(ninja) {
    var removedNinja = $scope.ninjas.indexOf(ninja);
    $scope.ninjas.splice(removedNinja, 1);
  };

  $scope.addNinja = function() {
    $scope.ninjas.push({
      name: $scope.newninja.name,
      belt: $scope.newninja.belt,
      rate: parseInt($scope.newninja.rate),
      available: true
    })

    $scope.newninja.name = "";
    $scope.newninja.belt = "";
    $scope.newninja.rate = "";
  };

  $scope.removeAll = function() {
    $scope.ninjas = [];
  };

  $http.get('data/ninjas.json').then(function(response) {
      $scope.ninjas = response.data;
  });

}]);


myNinjaApp.controller('ContactController', ['$scope', '$location', function($scope, $location) {
  $scope.sendMessage = function() {
    $location.path('/contact-success');
  };
}]);
