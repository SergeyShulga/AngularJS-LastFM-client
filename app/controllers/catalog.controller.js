;(function(){
    
    var apiKey = '18ba87e858ef3e6e22bc35f7d41a8a60';
    var sharedSecret = '64e74e49a796f925353e0a3ce08fd728';
    
    angular
        .module("catalog")
        .controller("stylesListCtrl", function($scope){
            $scope.styles = [];
        })
        .controller("tagCtrl", function($scope, $http){
            // $scope.tag = 'metal';
            $scope.getData = function(){
                $http({
                    method: 'GET',
                    url: "http://ws.audioscrobbler.com/2.0/?method=tag.gettopartists&tag=" + $scope.tag +"& limit=50&api_key=" + apiKey + "&format=json"
                }).then(function successCallback(response){
                    $scope.topArtists = response.data.topartists.artist;
                     console.log(response.data.topartists.artist);
                    // console.log(response);
                }, function errorCallback(response){
                    console.log('error');
                });

                $http({
                    method: 'GET',
                    url: "http://ws.audioscrobbler.com/2.0/?method=tag.getinfo&tag=" + $scope.tag +"&lang=ru&api_key=" + apiKey + "&format=json"
                }).then(function successCallback(response){
                    $scope.tagInfo = response.data.tag.wiki.content;
                    // console.log(response);
                }, function errorCallback(response){
                    console.log('error info');
                });
            };
            // $scope.getData();
        })
        .controller("artistCtrl", function($scope, $http){
            // $scope.artistName = 'metallica';
            $scope.getTracks = function(){
                $http({
                    method: 'GET',
                    url: "http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist="+ $scope.artistName +"&api_key="+ apiKey +"&format=json"
                }).then(function successCallback(response){
                    $scope.topTracks = response.data.toptracks.track;
                    console.log(response);
                }, function errorCallback(response){
                    console.log('error artist');
                });
            };
            // $scope.getTracks();
        });
})();