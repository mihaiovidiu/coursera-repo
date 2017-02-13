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

        };
        
        function _getItemsForCategory(categoryShortName) {

        };

    };

}) ();