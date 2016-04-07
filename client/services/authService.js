/**
 * Created by Tauqeer Ahmed on 3/25/2016.
 */
angular.module('salesmanApp')
    .service('authService', [function () {
        var ser = this;
        var userAuthenticated = null;

        ser.setAccessToken = function (accessToken) {
            userAuthenticated = accessToken;
        };
        ser.getAccessToken = function () {
            return userAuthenticated;
        }

    }]);