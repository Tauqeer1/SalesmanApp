angular.module('salesmanApp')
    .controller('signinController', ['$http', '$location', 'authService', 'universalService','$state', function ($http, $location, authService, universalService,$state) {
        var _self = this;
        _self.loginData = {
            email: _self.email,
            password: _self.password
        };
        _self.signIn = function () {
            console.log(_self.loginData);
            $http.post('/signin', _self.loginData)
                .success(function (data) {
                    console.log('Data Object coming from server ', data);
                    console.log('AuthData token', data.authData.token);
                    console.log('success data ',data.successData);
                    console.log('Success Data id ', data.successData[0]._id);
                    //localStorage.setItem('token' , data.token);
                    authService.setAccessToken(data.authData.token);
                    universalService.setCompanyId(data.successData[0]._id);
                    $state.go('dashboard');
                })
                .error(function (err) {
                    console.log(err);
                })
        };

    }]);