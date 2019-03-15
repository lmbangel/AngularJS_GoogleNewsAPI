        angular.module('myApp.view1').factory('NewsFactory', ['$http', function($http)
        {
            return{
              'getNews':getNews
            }
            function getNews()
            {
              return $http.get("https://newsapi.org/v2/top-headlines?country=ZA&apiKey=5f676ef3a6c24c4491550d5110c685a2");
            }
        }
        ]);