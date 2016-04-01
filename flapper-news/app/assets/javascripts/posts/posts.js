angular.module('flapperNews')
  .factory('posts', ['$http', function($http) {
    var o = {
      posts: []
    };
    o.getAll = function() {
      return $http.get('/posts.json').success(function(data) {
        angular.copy(data, o.posts); //copy list of posts to client-side posts object
      });
    };
    o.create = function(post) {
      return $http.post('/posts.json', post).success(function(data) {
        o.posts.push(data);
      });
    };
    return o;
  }]);