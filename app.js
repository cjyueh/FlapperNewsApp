angular.module('flapperNews', ['ui.router'])
  .config([
    '$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
      $stateProvider
        //set home route
        .state('home', {
          url: '/home',
          templateUrl: '/home.html',
          controller: 'MainCtrl'
        });
      //direct to home route if URL is not defined
      $urlRouterProvider.otherwise('home');
  }])
  .factory('posts', [function() {
    var o = {
      posts: []
    };
    return o;
  }])
  .controller('MainCtrl', ['$scope', 'posts', function($scope, posts) {
    $scope.posts = posts.posts;
    $scope.addPost = function() {
      if(!$scope.title || $scope.title === '') { return; }
      $scope.posts.push({
        title: $scope.title,
        link: $scope.link,
        upvotes: 0
      });
      $scope.title = '';
      $scope.link = '';
    };
    $scope.incrementUpvotes = function(post) {
      post.upvotes += 1;
    };
  }]);