angular.module('salesmanApp')
    .controller('signinController', ['$http', 'authService', 'universalService','$state','$mdToast', function ($http, authService, universalService,$state,$mdToast) {
        var _self = this;
        _self.loginData = {
            email: _self.email,
            password: _self.password
        };
        _self.signIn = function () {
            console.log(_self.loginData);
            $http.post('/signin', _self.loginData)
                .success(function (data) {
                    if(data.status){
                        $mdToast.show($mdToast.simple().textContent(data.message).position('right').hideDelay(3000));
                        console.log("Object Status" , data.status);
                        console.log("Data Object coming from server ", data);
                        console.log("AuthData token" , data.authData.token);
                        console.log("Success data ",data.successData);
                        console.log("Success Data id ",data.successData[0]._id);
                        authService.setAccessToken(data.authData.token);
                        universalService.setCompanyId(data.successData[0]._id);
                        $state.go('dashboard');
                    }
                    else {
                        $mdToast.show($mdToast.simple().textContent(data.message).position('right').hideDelay(3000));
                        $state.go('signin');
                    }
                })
                .error(function (err) {
                    //this function runs when there is internal server error
                    console.log(err);
                })
        };

    }]);