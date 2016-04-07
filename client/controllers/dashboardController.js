/**
 * Created by Tauqeer Ahmed on 3/24/2016.
 */
angular.module('salesmanApp')
    .controller('dashboardController', ['$state', function ($state) {
        var _self = this;

        _self.heading = "Dashboard";


        _self.salesman = function(path){
            $state.go(path);
        };
        _self.product = function(path){
            $state.go(path);
        };
        _self.order = function(path){
            $state.go(path);
        };
    }]);