;(function () {

    "use strict";

    angular
        .module("app")
        .factory("DashboardModel", DashboardModel);

    DashboardModel.$inject = ['$resource'];

    function DashboardModel($resource) {
        
        let chart = {
            chartArtists: $resource('http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&limit=20&api_key=18ba87e858ef3e6e22bc35f7d41a8a60&format=json', {}, {}),
            // chartArtists: $resource('http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&limit=20&api_key=18ba87e858ef3e6e22bc35f7d41a8a60&format=json', {}, {}),
            chartTracks: $resource('http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&limit=100&api_key=18ba87e858ef3e6e22bc35f7d41a8a60&format=json', {}, {}),
            chartTags: $resource('http://ws.audioscrobbler.com/2.0/?method=chart.gettoptags&api_key=18ba87e858ef3e6e22bc35f7d41a8a60&format=json', {}, {})
        };

        
        return chart;

    }

})();
