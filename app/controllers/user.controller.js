(function() {
    'use strict';

    angular
        .module('app')
        .controller('UserController', UserController);

    UserController.$inject = ['$http'];
    function UserController($http) {
        let vm = this;
        let userName = localStorage.getItem('name');
        vm.menu = {
            userInfo: getUserInfo,
            // userLovedTracks: getUserLovedTracks
        }
        getUserInfo();
        function getUserInfo() {
            $http.get('http://ws.audioscrobbler.com/2.0/?method=user.getinfo&user=' + userName + '&api_key=18ba87e858ef3e6e22bc35f7d41a8a60&format=json').then(function(data){
                vm.user = data.data.user;
                console.log(data.data.user);
            }, (data)=>console.log(Error.data));
        }
        getUserLovedTracks();
        function getUserLovedTracks(){
            $http.get('http://ws.audioscrobbler.com/2.0/?method=user.getLovedTracks&user=' + userName + '&api_key=18ba87e858ef3e6e22bc35f7d41a8a60&format=json').then(function(data){
                vm.lovedTracks = data.data.lovedtracks.track;
                console.log(data.data.lovedtracks.track)
            }, (data)=>console.log(Error.data));
        }
    }
})();