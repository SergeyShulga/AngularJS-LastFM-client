(function() {
    'use strict';

    angular
        .module('app')
        .controller('AuthController', AuthController);

    AuthController.$inject = ['$location', '$state', 'md5', '$timeout', '$http'];
    function AuthController($location, $state, md5, $timeout, $http) {

        activate();

        function activate() {
            let url_params = $location.search();
            let user_token = url_params.token;
            var x2js = new X2JS();

            localStorage.setItem("token", user_token);

            let key  = md5.createHash('api_key18ba87e858ef3e6e22bc35f7d41a8a60methodauth.getSessiontoken' + user_token + '64e74e49a796f925353e0a3ce08fd728');

            localStorage.setItem("key", key);
            
            $http.post('http://ws.audioscrobbler.com/2.0/?method=auth.getSession&api_key=18ba87e858ef3e6e22bc35f7d41a8a60&token=' + user_token + '&api_sig=' + key)
                .then(function(data){
                    var res = x2js.xml_str2json(data.data);
                    console.log(res.lfm.session.name);
                    localStorage.setItem('name', res.lfm.session.name);
                    console.log(data);
                }, 
                (data)=>console.log(Error.data));
            $timeout(() => $state.go('dashboard.chart-artists'), 500)
        }
    }
})();
{/* <lfm status="ok">
    <session>
        <name>s_shulga</name>
        <key>MLV-8UcFrXltw7prFmj01xm_ePpZfk0n</key>
        <subscriber>0</subscriber>
    </session>
</lfm> */}