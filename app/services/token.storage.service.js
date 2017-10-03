(function() {
    'use strict';

    angular
        .module('app')
        .service('tokenStorage', tokenStorage);

    function tokenStorage() {
        let _token = '';
        return{
            setToken: function(token){
                _token = token;
                localStorage.setItem('token', _token);
            },
            getToken: function(){
                return localStorage.getItem('token');
            }

        }
    }
})();