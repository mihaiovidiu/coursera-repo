(function () {
"use strict";

angular.module('public')
.service('InfoService', InfoService);


function InfoService() {
  var service = this;

  service.saveUserInfo = function(firstName, lastName, email, phone, menuItemName, menuItemDescription) {
    service.userInfo = {};

    service.userInfo.firstName = firstName;
    service.userInfo.lastName = lastName;
    service.userInfo.email = email;
    service.userInfo.phone = phone;
    service.userInfo.menuItemName = menuItemName;
    service.userInfo.menuItemDescription = menuItemDescription;
    
  };
}



})();
