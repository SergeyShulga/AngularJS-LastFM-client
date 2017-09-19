;(function(){
    'use strict';

    angular
        .module("app")
        .factory("SearchModel", SearchModel);

        SearchModel.$inject = ["$http"];

        function SearchModel($http){
            let search = {
                // artist: $http.get('http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=' + searchQuery + '&api_key=18ba87e858ef3e6e22bc35f7d41a8a60&format=json')
                // artist: $resource(`http://ws.audioscrobbler.com/2.0/?method=method&artist=:query&api_key=18ba87e858ef3e6e22bc35f7d41a8a60&format=json`,{method: 'artist.search', query: '@searchQuery'},{}),
                // album: $http.get('http://ws.audioscrobbler.com/2.0/?method=album.search&album=' + vm.searchQuery +'&api_key=18ba87e858ef3e6e22bc35f7d41a8a60&format=json'),
                // track: $http.get('http://ws.audioscrobbler.com/2.0/?method=track.search&track=' + vm.searchQuery +'&api_key=18ba87e858ef3e6e22bc35f7d41a8a60&format=json')
            };

            return search;
        }
})();