;(function(){
    'use strict';

    angular
        .module('app')
        .directive('appDashboardMenu', function(){
            return{
                restrict: 'E',
                transclude: true,
                templateUrl: 'app/views/templates/dashboard.menu.template.html'
            };
        });
})();