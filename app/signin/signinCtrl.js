'use strict';

angular.module('feedify.signin', [])
    .controller('SignInCtrl', ['$scope', 'UserModel',
        function($scope, UserModel) {

            $scope.signInUser = function() {
                UserModel.signIn($scope.user,
                    function(data) {
                        console.log(data);
                    },
                    function(data) {
                        console.log(data);
                    });
            };

        }
    ]);
