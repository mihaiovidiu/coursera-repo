(function() {
    'use strict'

    angular.module('public')
    .controller('SignupController', SignupController);

    SignupController.$inject = ['MenuService'];
    function SignupController(MenuService) {
        var $ctrl = this;
        $ctrl.message = "";
        $ctrl.signUp = function() {
            MenuService.getMenuItem($ctrl.favMenuItem).then(function(response) {
                console.log(response);
                var message = "";
                if (response)
                    message = "Your information has been saved.";
                else
                {
                    $ctrl.favMenuItem = "";
                    message = "No such menu number exists";
                }
                $ctrl.message = message;

            });
        }
    }

})();