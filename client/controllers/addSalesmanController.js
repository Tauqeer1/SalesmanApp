/**
 * Created by Tauqeer Ahmed on 4/6/2016.
 */
angular.module('salesmanApp')
    .controller('addSalesmanController', ['$http', function ($http) {
        var _self = this;
        _self.addSalesmanData = {};

        _self.add = function () {
            $http.post('/addSalesman', _self.addSalesmanData)
                .success(function (data) {
                    if(data.status){
                        console.log(data.status);
                        console.log(data);
                    }
                    else {
                        console.log(data.status);
                    }
                })
                .error(function (err) {
                    console.log(err);
                });

        }


    }]);