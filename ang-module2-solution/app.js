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
    ctrBuy.buyItem = ShoppingListCheckOffService.buyItem;
    ctrBuy.addToList = function () {
        ShoppingListCheckOffService.addToList(ctrBuy.nameToAdd, ctrBuy.quantityToAdd)
        ctrBuy.nameToAdd = "";
        ctrBuy.quantityToAdd = "";
    };

}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
    var ctrBought = this;

    ctrBought.shoppingList = ShoppingListCheckOffService.boughtList;
    ctrBought.backToList = ShoppingListCheckOffService.backToList;

}

function ShoppingListCheckOffService() {
    var service = this;

    var toBuyList = [
        {
            name: "cookies",
            quantity: 10
        },
        {
            name: "bananas",
            quantity: 15        },
        {
            name: "onions",
            quantity: 2        },
        {
            name: "oranges",
            quantity: 7        
        },
        {
            name: "fish",
            quantity: 2,
        },
        {
            name: "tomatos",
            quantity: 12,
        },
    ];

    var boughtList = [];

    service.toBuyList = toBuyList;
  

    service.boughtList = boughtList;

    service.buyItem = function(itemIndex) {
        var item = toBuyList[itemIndex];
        toBuyList.splice(itemIndex, 1);
        boughtList.push(item);
    }

    service.backToList = function(itemIndex) {
        var item = boughtList[itemIndex];
        boughtList.splice(itemIndex, 1);
        toBuyList.push(item);
    }

    service.addToList = function(itemName, itemQuantity) {
        toBuyList.push({
            name: itemName,
            quantity: itemQuantity
        });
    }
}

})();