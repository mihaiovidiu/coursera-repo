(function(){
    'use strict'

    angular.module('MenuApp')
    .controller('ItemsViewController', ItemsViewController);

    ItemsViewController.$inject = ['data'];
    function ItemsViewController(data){
        var ctrl = this;

        ctrl.categoryName = data.categoryName;
        ctrl.items = data.items;
        
    };
})();