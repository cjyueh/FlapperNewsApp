angular.module('flapperNews')
  .controller('PostsCtrl', [
    '$scope', 'posts', 'post', function($scope, posts, post) {
      $scope.post = post;
      // $scope.post = posts.posts[$stateParams.id]; //grat a post from posts using id from $stateParams
      $scope.addComment = function() {
        if($scope.body === '') { return; }
        posts.addComment(post.id, {
          body: $scope.body,
          author: 'user'
        }).success(function(comment) {
          $scope.post.comments.push(comment);
        });
        // $scope.post.comments.push({
        //   body: $scope.body,
        //   author: 'user',
        //   upvotes: 0
        // });
        $scope.body = '';
      };
    }]);