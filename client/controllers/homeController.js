/**
 * Created by Tauqeer Ahmed on 3/21/2016.
 */
angular.module('salesmanApp')
    .controller('homeController', ['$http', '$q', '$location', '$state', function ($http, $q, $location,$state) {
        var _self = this;
        _self.signUp = function (path) {
            $state.go(path);
        };
        _self.signIn = function (path) {
            $state.go(path);
        };
    }]);