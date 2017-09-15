(function() {
    'use strict';

    angular
        .module('app')
        .controller('SearchController', SearchController);

    SearchController.$inject = ['$http'];
    function SearchController($http) {
        let vm = this;
        // let artists = [];
        vm.menu = {
            artist: artistSearch,
            // artists: artists,
            album: albumSearch,
            track: trackSearch

        };
        
        // activate();

        //////////////

        function artistSearch() { 
            $http.get('http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=' + vm.query + '&limit=5&api_key=18ba87e858ef3e6e22bc35f7d41a8a60&format=json').then( (response) => vm.artists = response.data.results.artistmatches.artist, (response) => console.log(Error.data) );
                // function(response){
                //     vm.artists = response.data.results.artistmatches.artist;

                // },
                // function(response){
                //      console.log(Error.data)
                // });

        }

        function trackSearch() { 
             $http.get('http://ws.audioscrobbler.com/2.0/?method=track.search&track=' + vm.query + '&limit=5&api_key=18ba87e858ef3e6e22bc35f7d41a8a60&format=json').then( (response) => vm.tracks = response.data.results.trackmatches.track, (response) => console.log(Error.data) );

        }

        function albumSearch() { 
             $http.get('http://ws.audioscrobbler.com/2.0/?method=album.search&album=' + vm.query + '&limit=5&api_key=18ba87e858ef3e6e22bc35f7d41a8a60&format=json').then((response) => vm.albums = response.data.results.albummatches.album, (response) => console.log(Error.data));

        }
    }
})();