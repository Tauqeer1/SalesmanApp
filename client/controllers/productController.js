/**
 * Created by Tauqeer Ahmed on 4/6/2016.
 */
angular.module('salesmanApp')
    .controller('productController', ['$http', '$mdDialog', 'universalService', function ($http, $mdDialog, universalService) {
        var _self = this;
        _self.heading = "Product";

        _self.addProduct = function (ev) {
            //var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && _self.customFullscreen;
            $mdDialog.show({
                templateUrl: 'views/addProduct.html',
                controller: 'addProductController',
                controllerAs: 'addProductCtrl',
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


        _self.allProduct = function () {
            $http.get('/viewProduct/' + universalService.getCompanyId())
                .success(function (data) {

                    if (data.status) {
                        console.log(data);
                    }
                    else {
                        console.log("Error");
                    }
                })
                .error(function (err) {
                    console.log(err);
                })

        };
        _self.allProduct();

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