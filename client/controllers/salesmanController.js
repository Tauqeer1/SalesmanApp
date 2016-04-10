/**
 * Created by Tauqeer Ahmed on 4/6/2016.
 */
angular.module('salesmanApp')
    .controller('salesmanController', ['$mdDialog', '$http', 'universalService', function ($mdDialog, $http, universalService) {
        var _self = this;

        _self.heading = "Salesman";

        _self.allSalesman = function () {
            $http.get('/viewSalesman/' + universalService.getCompanyId())
                .success(function (data) {
                    console.log('All Salesman ',data);
                })
                .error(function (err) {

                })
        };
        _self.allSalesman();
        _self.addSalesman = function (ev) {
            //var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && _self.customFullscreen;
            $mdDialog.show({
                templateUrl: 'views/addSalesman.html',
                controller: 'addSalesmanController',
                controllerAs: 'addSalesmanCtrl',
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