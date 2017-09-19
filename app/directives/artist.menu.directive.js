;(function(){
    'use strict';

    angular
        .module('app')
        .directive('appArtistMenu', function(){
            return{
                restrict: 'E',
                transclude: true,
                templateUrl: 'app/views/templates/artist.menu.template.html'
            };
        });
})();