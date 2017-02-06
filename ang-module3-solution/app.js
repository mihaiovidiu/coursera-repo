(function () {
    'use strict'
    angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', FoundItemsDirective)

   // The found items directive
   function FoundItemsDirective() {
       var ddo = {
            restrict: 'E',
            templateUrl: '/snippets/foundMenuItems.html',
            scope: {
                foundItems: '<',
                onRemove: '&',
                showLoading: '=',
                showTable: '='
            },
            controller: 'NarrowItDownController as dirCtrl',
            bindToController: true
       };
       return ddo;
   }

   // The Controller
   NarrowItDownController.$inject = ['MenuSearchService'];
   function NarrowItDownController (MenuSearchService) {
       var ctrl = this;

       ctrl.selectedItems = [];
       ctrl.showLoading = false;
       ctrl.showTable = false;
       ctrl.searchTerm = "";
       
       ctrl.getItems = function() {
           ctrl.showTable = false;
           ctrl.showLoading = true;
           var promise = MenuSearchService.getMatchedMenuItems(ctrl.searchTerm);
           promise.then(function successCallback(result){
               ctrl.showLoading = false;
               ctrl.selectedItems = result;
               ctrl.showTable = true;
           });
       }; 
       ctrl.removeItem = function(index) {
           ctrl.selectedItems.splice(index, 1);
       }
   }

   // The Service
   MenuSearchService.$inject = ['$http'];
   function MenuSearchService ($http) {
       var service = this;

       service.getMatchedMenuItems = function (searchTerm) {
           return $http({
               url : 'https://davids-restaurant.herokuapp.com/menu_items.json'
           }).then(function successCallback(response){
               // do something with response.data           
               var foundItems = response.data.menu_items;
               if (searchTerm && searchTerm != '')
               {
                   foundItems = foundItems.filter(function (element){
                       return element.description.includes(searchTerm);
                   });
               }
               else
               {
                   foundItems = [];
               }
                           
               return foundItems;
           }, function errorCallback(response){
               // do something with the response
           });

       };

   }
})();