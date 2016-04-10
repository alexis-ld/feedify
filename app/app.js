'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('feedify', [
    'ngResource',
    'ngCookies',
    'ngAnimate',
    'ui.router',
    'ui.bootstrap',
    'feedify.menu',
    'feedify.view1',
    'feedify.view2',
    'myApp.version'
]).run(function($rootScope, $state, $cookies, $http) {
    /*$rootScope.$on('$stateChangeStart', function(event, toState, toParams) {
        var requireLogin = toState.data.requireLogin;
        if (!$rootScope.userToken) {
            var userCookie = $cookies.getObject('userToken');
            if (typeof userCookie != 'undefined') {
                $rootScope.userToken = userCookie.token;
                $http.defaults.headers.common['User-token'] = userCookie.token;
            }
        }
        if (requireLogin && typeof $rootScope.userToken === 'undefined') {
            event.preventDefault();
            $state.go('login');
        }
    });*/
}).config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");

    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: 'landingView.html',
            data: {
                requireLogin: false
            }
        })
        .state('signup', {
            url: "/signup",
            //templateUrl: 'components/signup/signup.html',
            //controller: "SignupCtrl",
            data: {
                requireLogin: false
            }
        })
        .state('login', {
            url: "/login",
            //templateUrl: 'components/login/login.html',
            //controller: "LoginCtrl",
            data: {
                requireLogin: false
            }
        })
        .state('app', {
            templateUrl: "appView.html",
            controller: "MenuCtrl",
            data: {
                requireLogin: true // this property will apply to all children of 'app' state
            }
        })
        .state('app.home', {
            url: "/app/home",
            //templateUrl: "/components/home/homeKeySelection.html",
            //controller: "HomeKeySelectionCtrl"
        });

}]);
