'use strict';


angular.module('myApp.view1', ['ngRoute'])

        .config(['$routeProvider', function($routeProvider) {
          $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
          });
        }]);










        

// .controller('View1Ctrl', ['$scope', '$http', function($scope, $http) {
//   var headlines = /v2/top-hadlines;
//   $http.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=5f676ef3a6c24c4491550d5110c685a2').
//   then(function(response) {

//       $scope.headlines = response.data;

//   });
// }]);

