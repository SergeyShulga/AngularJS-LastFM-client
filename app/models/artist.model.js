;(function () {

    "use strict";

    angular
        .module("app")
        .factory("ArtistModel", ArtistModel);

    ArtistModel.$inject = ['$resource'];

    function ArtistModel($resource) {
        
        let artistInfo = {

            artistWiki: $resource(`http://ws.audioscrobbler.com/2.0/?method=:method&artist=:name&autocorrect=:autocorrection&lang=:lang&api_key=18ba87e858ef3e6e22bc35f7d41a8a60&format=json`,{method: 'artist.getInfo', name: '@name', autocorrect: '1', lang: 'ru'},{}),
            
			artistTopTracks: $resource('http://ws.audioscrobbler.com/2.0/?method=:method&artist=:name&autocorrect=:autocorrection&api_key=18ba87e858ef3e6e22bc35f7d41a8a60&format=json', {method: 'artist.getTopTracks', name: '@name', autocorrect: '1'}, {}),
            
			artistTopAlbums: $resource('http://ws.audioscrobbler.com/2.0/?method=:method&artist=:name&autocorrect=:autocorrection&api_key=18ba87e858ef3e6e22bc35f7d41a8a60&format=json', {method: 'artist.getTopAlbums', name: '@name', autocorrect: '1'}, {}),
             
			artistSimilar: $resource('http://ws.audioscrobbler.com/2.0/?method=:method&artist=:name&autocorrect=:autocorrection&limit=:limit&api_key=18ba87e858ef3e6e22bc35f7d41a8a60&format=json', {method: 'artist.getSimilar', name: '@name', autocorrect: '1', limit: '20'}, {}),
             
            artistTopTags: $resource('http://ws.audioscrobbler.com/2.0/?method=:method&artist=:name&autocorrect=:autocorrection&api_key=18ba87e858ef3e6e22bc35f7d41a8a60&format=json', {method: 'artist.getTopTags', name: '@name', autocorrect: '1'}, {})
        };

        
        return artistInfo;

    }

})();
