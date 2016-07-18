app.service('SearchSrv', ['$http' ,function($http) {

  this.getArticles = function(searchTerm) {
    return $http({
      method: 'GET',
      url: 'https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=links&list=search&meta=&plnamespace=4&srsearch=' + searchTerm
    })
    .then(function(response) {
      console.log(response.data.query.search);
      return response.data.query.search;
    }, function error(response) {
      console.log(response);
    })
  };

}]);