feedify.factory('FeedModel', ['$resource',
    function($resource) {

        return $resource(config.apiUrl, {}, {
            getFeeds: {
                method: "GET",
                url: config.apiUrl+"/feeds"
            },
            addFeed: {
                method: "POST",
                url: config.apiUrl+"/feed"
            },
            getArticles: {
              method: "GET",
              url: config.apiUrl+"/feeds/articles/:page"
            },
            getFeedInfos: {
              method: "GET",
              url: config.apiUrl+"/feed/:id"
            },
            markArticleAsRead: {
              method: "POST",
              url: config.apiUrl+"/article/as_read/:id"
            }
        });
    }
]);
