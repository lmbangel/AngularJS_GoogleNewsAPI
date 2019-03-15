    angular.module('myApp.view1').controller('View1Ctrl', ['$scope','NewsFactory', function($scope, NewsFactory)
        {
              $scope.headlines ='';

              NewsFactory.getNews()
              .then(
              function(SuccessResponse)
              {
                  $scope.headlines = SuccessResponse.data.articles;

                  console.log($scope.headlines);
              },
              function(ErrorResponse)
              {
                  alert("Something went wrong!");
                console.log(ErrorResponse);
              }
            )
        }]);