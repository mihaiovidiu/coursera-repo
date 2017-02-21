(function() {
    'use strict'

    angular.module('public')
    .controller('SignupController', SignupController);

    SignupController.$inject = ['MenuService'];
    function SignupController(MenuService) {
        var $ctrl = this;


        $ctrl.signUp = function() {
            MenuService.getMenuItem($ctrl.favMenuItem);
        }
    }

})();