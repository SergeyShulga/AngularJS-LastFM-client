;(function(){
    'use strict';

    angular
        .module('app')
        .directive('appSearch', function(){
            return{
                restrict: 'E',
                scope: {search: '='},
                controller: 'SearchController',
                controllerAs: 'vm',
                templateUrl: 'app/views/templates/search.template.html'
            };
        });
})();