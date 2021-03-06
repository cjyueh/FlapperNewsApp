angular.module('flapperNews', ['ui.router', 'templates'])
  .config([
    '$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
      $stateProvider
        //set home route
        .state('home', {
          url: '/home',
          templateUrl: 'home/_home.html',
          controller: 'MainCtrl',
          resolve: {
            postPromise: ['posts', function(posts) {
              return posts.getAll(); //call .getAll() to get all posts from server to display in view
            }]
          }
        })
        //get a post
        .state('posts', {
          url: '/posts/{id}', //{id} is route param
          templateUrl: 'posts/_posts.html',
          controller: 'PostsCtrl',
          resolve: {
            post: ['$stateParams', 'posts', function($stateParams, posts) {
              return posts.get($stateParams.id);
            }]
          }
        });
      //direct to home route if URL is not defined
      $urlRouterProvider.otherwise('home');
  }]);