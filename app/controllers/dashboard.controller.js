;(function () {

    "use strict";

    angular
        .module("app")
        .controller("DashboardController", DashboardController);

    DashboardController.$inject = ['DashboardModel'];

    function DashboardController(DashboardModel) {
        let vm = this;

        vm.model = {
            // chartArtistsResponse: DashboardModel.chartArtists.get(),
            chartTracksResponse: DashboardModel.chartTracks.get(),
            chartTagsResponse: DashboardModel.chartTags.get()
        };
    };

})();