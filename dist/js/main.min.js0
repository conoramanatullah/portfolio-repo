"use strict";
(function(){
  angular.module('app', ['ngRoute'])
  .config(function($routeProvider, $locationProvider){
    $routeProvider
      .when("/",
        {
          templateUrl: "components/home/home.html",
          controller: "HomeController"
        })
      .when('/about-me',
        {
          templateUrl: "components/projects/about-me.html",
          controller: "AboutMeController"
        });

      $locationProvider.html5Mode(true);


  })
  .controller('MainController',function($scope){
    // Load view
    console.log("MainController Loaded");
    $scope.redirect = function(location){

      window.location = location;
    }
  })
  .controller('HomeController',function($scope, $location){
    // Page Navigation
    $scope.openPage = function(page){
      // Change url to open new page
      $location.path('/' + page);
    }
  })

  .controller('AboutMeController',function(){

  })

})();
