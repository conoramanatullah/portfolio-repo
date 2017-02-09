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
        })
      .when('/skills',
      {
        templateUrl: "components/projects/skills.html",
        controller: "SkillsController"
      })
      .when('/mars-oasis',
      {
        templateUrl: "components/projects/mars-oasis.html",
        controller: "MarsController"
      })
      .when('/esports',
      {
        templateUrl: "components/projects/esports.html",
        controller: "esportsController"
      })
      .when('/vr',
      {
        templateUrl: "components/projects/vr.html",
        controller: "VrController"
      })
      .when('/webgl',
      {
        templateUrl: "components/projects/webgl.html",
        controller: "WebglController"
      })
      .when('/countdown',
      {
        templateUrl: "components/projects/countdown.html",
        controller: "CountdownController"
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

  .controller('AboutMeController',function($scope, $location){
    $scope.openPage = function(page){
      // Change url to open new page
      $location.path('/' + page);
    }
  })
  .controller('SkillsController',function($scope, $location){
    $scope.openPage = function(page){
      // Change url to open new page
      $location.path('/' + page);
    }
  })
  .controller('MarsController',function($scope, $location){
    $scope.openPage = function(page){
      // Change url to open new page
      $location.path('/' + page);
    }
  })
  .controller('esportsController',function($scope, $location){
    $scope.openPage = function(page){
      // Change url to open new page
      $location.path('/' + page);
    }
  })
  .controller('VrController',function($scope, $location){
    $scope.openPage = function(page){
      // Change url to open new page
      $location.path('/' + page);
    }
  })
  .controller('WebglController',function($scope, $location){
    $scope.openPage = function(page){
      // Change url to open new page
      $location.path('/' + page);
    }
  })
  .controller('CountdownController',function($scope, $location){
    $scope.openPage = function(page){
      // Change url to open new page
      $location.path('/' + page);
    }
  })
  .controller('MatrixController',function($scope, $location){
    $scope.openPage = function(page){
      // Change url to open new page
      $location.path('/' + page);
    }
  })

})();
