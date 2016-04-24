'use strict';

var config = {
    apiUrl: "http://romain-zanchi.com:4498/api"
};

// Declare app level module which depends on views, and components
var feedify = angular.module('feedify', [
    'ngResource',
    'ngCookies',
    'ngAnimate',
    'ngSanitize',
    'ui.router',
    'ui.bootstrap',
    'vcRecaptcha',
    'feedify.menu',
    'feedify.apphome',
    'feedify.signup',
    'feedify.signin',
    'feedify.view1',
    'feedify.view2',
    'myApp.version'
]).run(function($rootScope, $state, $cookies, $http) {
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams) {
        var requireLogin = toState.data.requireLogin;
        if (!$rootScope.userToken) {
            var userCookie = $cookies.getObject('userToken');
            if (typeof userCookie != 'undefined') {
                $rootScope.userToken = userCookie;
                $http.defaults.headers.common['User-token'] = userCookie;

                var userUsername = $cookies.getObject('userUsername');
                $rootScope.userUsername = userUsername;

            }
        }
        if (requireLogin && typeof $rootScope.userToken === 'undefined') {
            event.preventDefault();
            $state.go('signin');
        }
    });
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
            templateUrl: 'signup/signupView.html',
            controller: "SignUpCtrl",
            data: {
                requireLogin: false
            }
        })
        .state('signin', {
            url: "/signin",
            templateUrl: 'signin/signinView.html',
            controller: "SignInCtrl",
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
            templateUrl: "apphome/apphomeView.html",
            controller: "AppHomeCtrl"
        });

}]);
