(function() {
    'use strict'

    angular.module('MenuApp')
    .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
        // Redirect to home page if no url matches
        $urlRouterProvider.otherwise('/');

        // Set up UI states
        $stateProvider

        // Home page
        .state('home', {
            url: '/',
            template: 'HOME TEMPLATE' 
        });
    };
})();