(function () {
    'use strict'

    angular.module('data')
    .service('MenuDataService', MenuDataService);

    MenuDataService.$inject = ['$http'];    
    function MenuDataService($http) {
        var service = this;

        service.getAllCategories = _getAllCategories;
        service.getItemsForCategory = _getItemsForCategory;

        
        // returns a promise using $http service            
        function _getAllCategories () {
            return $http({
                url: 'https://davids-restaurant.herokuapp.com/categories.json'
            }).then(function success(response){
                // do something with response.data
                return response.data;
            }, function error(response){
                // do something with the response
                return null;
            });
        };
        
        function _getItemsForCategory(categoryShortName) {

        };

    };

}) ();