;(function () {

    "use strict";

    angular
        .module("app")
        .controller("ArtistController", ArtistController);

    ArtistController.$inject = ['ArtistModel', 'DashboardModel', '$stateParams'];

    function ArtistController(ArtistModel, DashboardModel, $stateParams) {
        let vm = this;

        vm.model = {
            
            chartArtistsResponse: DashboardModel.chartArtists.get(),
            artistInfoResponse: ArtistModel.artistWiki.get({name: $stateParams.name}),
            artistTracksResponse: ArtistModel.artistTopTracks.get({name: $stateParams.name}),
            artistAlbumsResponse: ArtistModel.artistTopAlbums.get({name: $stateParams.name}),
            // chartTracksResponse: DashboardModel.chartTracks.get(),
            // chartTagsResponse: DashboardModel.chartTags.get()
        }
        // console.log(vm.model.chartArtistsResponse)
        // console.log(vm.model.artistInfoResponse)
        console.log(vm.model.artistTracksResponse);
        console.log(vm.model.artistAlbumsResponse);
        // console.log(vm.model.chartTagsResponse)
    }

})();