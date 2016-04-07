/**
 * Created by Tauqeer Ahmed on 4/6/2016.
 */
angular.module('salesmanApp')
    .controller('salesmanController', ['$mdDialog', '$mdMedia','$scope', function ($mdDialog, $mdMedia,$scope) {
        var _self = this;

        _self.heading = "Salesman";


        _self.addSalesman = function (ev) {
            //var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && _self.customFullscreen;
            $mdDialog.show({
                    templateUrl: 'views/addSalesman.html',
                    controller : 'salesmanController',
                    controllerAs : 'addSalesmanCtrl',
                    //parent: angular.element(document.body),
                    targetEvent: ev,
                    clickOutsideToClose: true
                    //fullscreen: useFullScreen
                });
               /* .then(function (answer) {
                    _self.status = 'You said the information was "' + answer + '".';
                }, function () {
                    _self.status = 'You cancelled the dialog.';
                });
            $scope.$watch(function () {
                return $mdMedia('xs') || $mdMedia('sm');
            }, function (wantsFullScreen) {
                $scope.customFullscreen = (wantsFullScreen === true);
            });*/
        };

        _self.add = function(){

        };

        _self.messages = [
            {
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {

                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {

                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {

                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {

                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {

                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            }
        ];

    }]);