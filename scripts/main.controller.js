app.controller('MainCtrl', ['$scope', 'SearchSrv', function($scope, SearchSrv) {

  $scope.search = function(searchTerm) {
    SearchSrv.getArticles(searchTerm).then(function(articles) {
       $scope.articles = articles;
    });
  }
  
}]);