angular.module('salesmanApp')
    .controller('signupController', ['$http', '$location', 'universalService', '$state', function ($http, $location, universalService, $state) {
        var _self = this;
        _self.signUpData = {
            /*companyName: 'myCompany',
             userName: 'Tauqeer',
             firstName: 'Tauqeer',
             lastName: 'Ahmed',
             email: 'tauqeer.shakir@yahoo.com',
             password: '123',
             confirmPassword: '123'*/

            companyName: _self.companyName,
            userName: _self.userName,
            firstName: _self.firstName,
            lastName: _self.lastName,
            email: _self.email,
            password: _self.password,
            confirmpassword: _self.confirmpassword

        };
        _self.signUp = function () {
            console.log(_self.signUpData);
            $http.post('/signup', _self.signUpData)
                .success(function (data) {
                    console.log("Data Arrived ", data);
                    console.log("Data id  ", data.successData._id);
                    //universalService.companyId = data.success._id;
                    //$location.path('/signin');
                    $state.go('signin');
                })
                .error(function (err) {
                    console.log("Error ", err);
                })
        }

    }]);