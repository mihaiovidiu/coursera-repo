(function () {
    'use strict'

    angular.module('data')
    .service('MenuDataService', MenuDataService);

    MenuDataService.$inject = ['$http'];    
    function MenuDataService($http) {
        var service = this;

        service.getAllCategories = _getAllCategories;
        service.getItemsForCategory = _getItemsForCategory;


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
            var address = "https://davids-restaurant.herokuapp.com/menu_items.json?category="
                + categoryShortName;
            return $http({
                url: address
            }).then(function success(response){
                return response.data.menu_items;
            }, function error(response){
                return null;
            });
        };

    };

}) ();