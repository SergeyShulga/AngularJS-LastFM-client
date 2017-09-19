;(function(){
    'use strict';

    angular
        .module('app')
        .directive('appFooter', function(){
            return{
                restrict: 'E',
                transclude: true,
                templateUrl: 'app/views/templates/footer.template.html'
            };
        });
})();