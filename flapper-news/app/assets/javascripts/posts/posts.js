angular.module('flapperNews')
  .factory('posts', ['$http', function($http) {
    var o = {
      posts: []
    };
    o.getAll = function() {
      return $http.get('/posts.json').success(function(data) {
        angular.copy(data, o.posts); //compy list of posts to client-side posts object
      });
    };
    return o;
  }]);