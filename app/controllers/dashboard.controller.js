// ;(function(){
//     'use strict';

//     angular
//         .module("app")
//         .controller("DashboardController", DashboardController);

//         DashboardController.$inject = ['DashboardModel'];

//         function DashboardController(DashboardModel){
//             let vm = this;

//             vm.model = {
//                 chartArtists: []
//             };

//             activate();

//             function activate(){
//                 DashboardModel.getAll().then(
//                     response => vm.model.chartArtists = response.data
//                 )
                
//             }
//         }
// })();
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
        // console.log(vm.model.chartArtistsResponse)
        // console.log(vm.model.chartTracksResponse)
        // console.log(vm.model.chartTagsResponse)
    }

})();