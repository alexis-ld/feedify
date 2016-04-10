'use strict';

angular.module('feedify.signup', [])
    .controller('SignUpCtrl', ['$scope', 'UserModel',
        function($scope, UserModel) {

            $scope.signUpUser = function() {
                UserModel.signUp($scope.user,
                    function(data) {
                        console.log(data);
                    },
                    function(data) {
                        console.log(data);
                    });
            };

        }
    ]);
