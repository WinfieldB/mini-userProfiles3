var app = angular.module('userProfiles');

app.service('mainService', function($http, $q) {
  this.getUsers = function() {
    var deferred = $q.defer();
    $http({
        method: 'GET',
        url: 'http://swapi.co/api/people/'
    }).then(function(response) {
      var parsedResponse = response.data.results;
      for (var i = 0; i < parsedResponse.length; i++) {
        parsedResponse[i].name ="Ralf"
      }
      deferred.resolve(parsedResponse)
    })
    return deferred.promise;
  }
});
