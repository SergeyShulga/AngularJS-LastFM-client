;(function(){

  "use strict";

  angular
      .module("app")
      .config(function($stateProvider, $locationProvider) {

          $locationProvider.html5Mode(true);

          $stateProvider
              .state('dashboard', {
                  url: '/dashboard',
                  abstract: true,
                  controller: 'DashboardController',
                  controllerAs: 'vm',
                  templateUrl: 'app/views/dashboard.html'
              })
                    .state('dashboard.chart-artists', {
                        url: '/artists',
                        controller: 'ArtistController',
                        controllerAs: 'vm',
                        templateUrl: 'app/views/dashboard.artists.html'
                    })
                    .state('dashboard.chart-tracks', {
                        url: '/tracks',
                        templateUrl: 'app/views/dashboard.tracks.html'
                    })
                    .state('dashboard.chart-tags', {
                        url: '/tags',
                        templateUrl: 'app/views/dashboard.tags.html'
                    })
              
              .state('tag', {
                  url: '/tag',
                  controller: 'TagController',
                  controllerAs: 'vm',
                  templateUrl: 'app/views/tag.html'
              })

              .state('artist', {
                  url: '/artist/:name',
                  abstract: true,
                  controller: 'ArtistController',
                  controllerAs: 'vm',
                  templateUrl: 'app/views/artist.html'
              })
                    .state('artist.main', {
                        url: '/overview',
                        templateUrl: 'app/views/artist.main.html'
                    })
                    .state('artist.albums', {
                        url: '/top-albums',
                        templateUrl: 'app/views/artist.albums.html'
                    })
                    .state('artist.wiki', {
                        url: '/wiki',
                        templateUrl: 'app/views/artist.wiki.html'
                    })
                    .state('artist.tracks', {
                        url: '/top-tracks',
                        templateUrl: 'app/views/artist.tracks.html'
                    })
                    .state('artist.similar', {
                        url: '/similar-artists',
                        templateUrl: 'app/views/artist.similar.html'
                    })
                    .state('artist.tags', {
                        url: '/tags',
                        templateUrl: 'app/views/artist.tags.html'
                    })
              .state('collections', {
                  url: '/user/collections',
                  controller: 'CollectionsController',
                  controllerAs: 'vm',
                  templateUrl: 'app/views/collections.html'
              })
              .state('auth', {
                  url: '/auth',
                  controllerAs: 'vm',
                  controller: 'AuthController',
                  templateUrl: 'app/views/auth.html'
              })
              .state('user', {
                  url: '/user',
                  controller: 'UserController',
                  controllerAs: 'vm',
                  templateUrl: 'app/views/user.html'
              });
      });
})();