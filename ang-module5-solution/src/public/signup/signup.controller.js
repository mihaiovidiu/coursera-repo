(function() {
    'use strict'

    angular.module('public')
    .controller('SignupController', SignupController);

    SignupController.$inject = ['MenuService', 'InfoService'];
    function SignupController(MenuService, InfoService) {
        var $ctrl = this;
        $ctrl.message = "";
        $ctrl.signUp = function() {
            MenuService.getMenuItem($ctrl.favMenuItem).then(function(response) {
                console.log(response);
                var message = "";
                if (response)
                {
                    // firstName, lastName, email, phone, favMenuItem
                    InfoService.saveUserInfo($ctrl.firstName, $ctrl.lastName, $ctrl.email,
                        $ctrl.phone, response.name, response.description);
                    message = "Your information has been saved.";
                }
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