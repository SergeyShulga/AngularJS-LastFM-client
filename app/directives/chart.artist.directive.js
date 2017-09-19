;(function(){
    'use strict';

    angular
        .module('app')
        .directive('appArtist', function(){
            return{
                scope: {
                    artist: '='
                },
                restrict: 'E',
                templateUrl: 'app/views/templates/chart.artist.template.html'
            };
        });
})();