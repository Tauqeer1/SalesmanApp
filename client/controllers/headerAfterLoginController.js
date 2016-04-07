/**
 * Created by Tauqeer Ahmed on 4/2/2016.
 */
angular.module('salesmanApp')
    .controller('headerAfterLoginController', ['$mdSidenav', function ($mdSidenav) {
        var _self = this;

        _self.showMenu = function () {

            $mdSidenav('left').toggle();
        };
        _self.logOut = function(){
            console.log("logout");
        }
    }]);