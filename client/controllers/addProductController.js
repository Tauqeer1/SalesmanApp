/**
 * Created by Tauqeer Ahmed on 4/7/2016.
 */
angular.module('salesmanApp')
    .controller('addProductController', ['$http', function ($http) {

        var _self = this;

        _self.addProductData = {};


        _self.add = function () {
            $http.post('/addProduct', _self.addProductData)
                .success(function (data) {
                    if (data.status) {
                        console.log('Product Data', data);

                    }
                    else {
                        console.log('Error data', data);
                    }
                })
                .error(function (err) {
                    console.log(err);
                })
        }


    }]);