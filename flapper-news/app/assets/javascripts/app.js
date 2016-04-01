angular.module('flapperNews', ['ui.router', 'templates'])
  .config([
    '$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
      $stateProvider
        //set home route
        .state('home', {
          url: '/home',
          templateUrl: 'home/_home.html',
          controller: 'MainCtrl'
        })
        //get a post
        .state('posts', {
          url: '/posts/{id}', //{id} is route param
          templateUrl: 'posts/_posts.html',
          controller: 'PostsCtrl'
        });
      //direct to home route if URL is not defined
      $urlRouterProvider.otherwise('home');
  }]);