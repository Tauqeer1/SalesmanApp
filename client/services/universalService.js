/**
 * Created by Tauqeer Ahmed on 3/28/2016.
 */
angular.module('salesmanApp')
    .service('universalService',[function(){
        var uniSer = this;
        var companyId = null;
        uniSer.setCompanyId = function (id) {
            companyId = id;
        };
        uniSer.getCompanyId = function () {
            return companyId;
        }


    }]);