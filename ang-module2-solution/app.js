(function (){
'use strict'

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService)

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
    var ctrBuy = this;

    ctrBuy.shoppingList = ShoppingListCheckOffService.toBuyList;

}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
    var ctrBought = this;

    ctrBought.shoppingList = ShoppingListCheckOffService.boughtList;

}

function ShoppingListCheckOffService() {
    var service = this;

    var list = [
        {
            name: "cookies",
            quantity: 10,
            bought: false
        },
        {
            name: "fruits",
            quantity: 15,
            bought: false
        },
        {
            name: "onions",
            quantity: 2,
            bought: true 
        }
    ];

    service.toBuyList = list.filter(function(element){
            return !element.bought;
        });
  

    service.boughtList = list.filter(function(element){
            return element.bought;
        });
}

})();