angular.module('CelebritiesApp', ['ngRoute'])

.config(function($routeProvider) {
    //this runs automatically when the main module is created
    //console.log('running config');
    $routeProvider
    .when('/', {
        templateUrl:'templates/main.html',
        controller: 'MainCtrl'
    })
    .when('/details/:itemID', {
        templateUrl:'templates/details.html',
        controller: 'DetailsCtrl'
    })
    .otherwise({redirectTo:'/'});
});