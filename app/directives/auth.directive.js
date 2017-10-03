;(function(){
    'use strict'

    angular
        .module('app')
        .directive('appAuth', function(){
            return{
                restrict: 'E',
                templateUrl: 'app/views/templates/auth.template.html'
            }
        })
})();