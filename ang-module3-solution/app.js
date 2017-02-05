(function () {
    'use strict'
    angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
   
   NarrowItDownController.$inject = ['MenuSearchService'];
   function NarrowItDownController (MenuSearchService) {
       var ctrl = this;

       this.items = MenuSearchService.getMatchedMenuItems;
   }

   MenuSearchService.$inject = ['$http'];
   function MenuSearchService ($http) {
       var service = this;

       service.getMatchedMenuItems = function (searchTerm) {
           $http({
               url : 'https://davids-restaurant.herokuapp.com/menu_items.json'
           }).then(function successCallback(response){
               // do something with response.data
               console.log(response.data);

           }, function errorCallback(response){
               // do something with the response
           });

       };

   }
})();