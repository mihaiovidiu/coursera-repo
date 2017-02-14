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
            templateUrl: 'src/menuApp/templates/homeView.template.html' 
        })

        // Categories view
        .state('categories', {
            url: '/categories',
            templateUrl: 'src/menuApp/templates/categoriesView.template.html',
            controller: 'CategoriesViewController as ctrl',
            resolve: {
                categories: ['MenuDataService', function(MenuDataService){
                    return MenuDataService.getAllCategories();
                }]
            } 
            
        })

        // Items view
        .state('items', {
            url: '/items/{categoryName}/{categoryShortName}',
            templateUrl: 'src/menuApp/templates/itemsView.template.html',
            controller: 'ItemsViewController as ctrl',
            resolve: {
                data: ['MenuDataService', '$stateParams', '$q', function (MenuDataService, $stateParams, $q){
                    var deferred = $q.defer();
                    var myData = {};
                    var promise = MenuDataService.getItemsForCategory($stateParams.categoryShortName);
                    promise.then(function successCallback(result){
                        myData.items = result;
                        myData.categoryName = $stateParams.categoryName;
                        deferred.resolve(myData);
                    }, function errorCallback(error){
                        deferred.reject(error);
                    });
                    return deferred.promise;
                }]
            }
        });

    };
})();