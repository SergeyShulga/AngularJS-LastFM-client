;(function() {
  'use strict';

  angular
    .module('app', ['ui.router','ngResource', 'angular-md5'])
    // .constant('URL', 'http://ws.audioscrobbler.com/2.0/')
    // .constant('FORMAT', 'json')
    // .constant('KEY', '18ba87e858ef3e6e22bc35f7d41a8a60')
    // .config(function($httpProvider){
      // $httpProvider.defaults.headers.common['api_key'] = '18ba87e858ef3e6e22bc35f7d41a8a60';
      // $httpProvider.defaults.headers.common['format'] = 'json';
      // $httpProvider.defaults.headers.common['url'] = 'http://ws.audioscrobbler.com/2.0';
      //$httpProvider.interceptors.push('tokenSender');
    // });
    // .factory('tokenSender', function($injector){
    //   return{
    //     request: function(config){
    //       config.headers['user-token'] = $injector.get('xxx').token;
    //       return config;
    //     },
    //     responseError: function(error){
    //       console.log('Error: ', error);
    //     }
    //   }
    // })
    //  .config(function($provide){
    //    $provide.decorator('$http', function($delegate){
    //      let pendingRequests = {};
    //      function getRequestIdentifier(config){
    //        var str = config.method + config.url;
    //        if(config.params && typeof config.params === 'object'){
    //          str += angular.toJson(config.params);
    //        }
    //        if(config.data && typeof config.data === 'object'){
    //          str += angular.toJson(config.data);
    //        }
    //        return str;
    //      }
    //      var $duplicateRequestsFilter = function(config){
    //        var identifier = getRequestIdentifier(config);
    //        if(pendingRequests[identifier]){
    //          return pendingRequests[identifier];
    //        }
    //        pendingRequests[identifier] = $delegate(config).finally(function(){
    //          delete pendingRequests[identifier];
    //        });
    //      }
    //      return $duplicateRequestsFilter;
    //    });
       
    //  });
})();