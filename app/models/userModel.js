feedify.factory('UserModel', ['$resource',
    function($resource) {

        return $resource(config.apiUrl, {}, {
            signUp: {
                method: "POST",
                url: config.apiUrl+"register"
            },
            signIn: {
                method: "POST",
                url: config.apiUrl+"login"
            }
        });
    }
]);
