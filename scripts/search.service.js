app.service('SearchSrv', ['$http' ,function($http) {

    var articles = [];

  this.getArticles = function(searchTerm) {
    return $http({
      method: 'GET',
      url: 'https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=links&list=search&meta=&plnamespace=4&srsearch=' + searchTerm
    })
    .then(function(response) {
      console.log(response.data.query.search);
      for(var i = 0; i < response.data.query.search.length; i++) {
          var article = new Article(response.data.query.search[i]);
          articles.push(article);
      }
      return articles;
    }, function error(response) {
      console.log(response);
    })
  };

}]);