(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchController);

LunchController.$inject = ['$scope'];
function LunchController($scope) {
    $scope.dishes = "";
    $scope.message = "";
    $scope.messageClass = "message-ok";
    $scope.inputClass = "";
    $scope.checkLunch = function () {
        if (StringNotSpaceOrEmpty($scope.dishes)) 
        {
            $scope.messageClass = "message-ok";
            $scope.inputClass = "input-ok";
            var meals = $scope.dishes.split(',').filter(StringNotSpaceOrEmpty);
            var numberOfMeals = meals.length;
            if (numberOfMeals <= 3)
                $scope.message = "Enjoy";
            else
                $scope.message = "Too much!";
        }
        else
        {            
            $scope.messageClass = "message-warning";
            $scope.message = "Please enter data first!"; 
            $scope.inputClass = "input-warning"; 
        }      
    };
}

function StringNotSpaceOrEmpty(s) {
    return s != "" && s != " ";
}

})();
