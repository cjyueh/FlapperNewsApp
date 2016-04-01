angular.module('flapperNews')
  .controller('PostsCtrl', [
    '$scope', '$stateParams', 'posts', function($scope, $stateParams, posts) {
      $scope.post = posts.posts[$stateParams.id]; //grat a post from posts using id from $stateParams
      $scope.addComment = function() {
        if($scope.body === '') { return; }
        $scope.post.comments.push({
          body: $scope.body,
          author: 'user',
          upvotes: 0
        });
        $scope.body = '';
      };
    }]);