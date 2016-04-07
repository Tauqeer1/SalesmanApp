/**
 * Created by Tauqeer Ahmed on 3/15/2016.
 */
angular.module('salesmanApp')
    .config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {

        //Configure Routing
        $stateProvider
            .state('home', {
                url: '/',
                views: {
                    "header": {
                        templateUrl: 'views/headerBeforeLogin.html',
                        controller: 'headerBeforeLoginController',
                        controllerAs: 'headerCtrl'
                    },
                    "main": {
                        templateUrl: 'views/home.html',
                        controller: 'homeController',
                        controllerAs: 'homeCtrl'
                    }
                }
            })
            .state('signup', {
                url: '/signup',
                views: {
                    "header": {
                        templateUrl: 'views/headerBeforeLogin.html',
                        controller: 'headerBeforeLoginController',
                        controllerAs: 'headerCtrl'
                    },
                    "main": {
                        templateUrl: 'views/signup.html',
                        controller: 'signupController',
                        controllerAs: 'signupCtrl'
                    }
                }
            })
            .state('signin', {
                url: '/signin',
                views: {
                    "header": {
                        templateUrl: 'views/headerBeforeLogin.html',
                        controller: 'headerBeforeLoginController',
                        controllerAs: 'headCtrl'
                    },
                    "main": {
                        templateUrl: 'views/signin.html',
                        controller: 'signinController',
                        controllerAs: 'signinCtrl'
                    }
                }
            })
            .state('dashboard', {
                url: '/dashboard',
                views: {
                    "header": {
                        templateUrl: 'views/headerAfterLogin.html',
                        controller: 'headerAfterLoginController',
                        controllerAs: 'headerAfterCtrl'
                    },
                    "main": {
                        templateUrl: 'views/dashboard.html',
                        controller: 'dashboardController',
                        controllerAs: 'dashboardCtrl'
                    }
                }
            })
            .state('dashboard.salesman', {
                url: '/salesman',
                views: {
                    "": {
                        templateUrl: 'views/salesman.html',
                        controller: 'salesmanController',
                        controllerAs: 'salesmanCtrl'
                    }
                }
            })
            .state('dashboard.product', {
                url: '/product',
                views: {
                    "": {
                        templateUrl: 'views/product.html',
                        controller: 'productController',
                        controllerAs: 'productCtrl'
                    }
                }
            })
            .state('dashboard.order', {
                url: '/order',
                views: {
                    "": {
                        templateUrl: "views/order.html",
                        controller: 'orderController',
                        controllerAs: 'orderCtrl'
                    }
                }
            });
        $urlRouterProvider.otherwise('/');
    }]);




/*.run(['$rootScope','$location','authService',function($rootScope,$location,authService){
 $rootScope.$on('$routeChangeStart',function(event,nextRoute , currentRoute){
 //if this is true
 if(nextRoute.$$route.authenticated){
 var userAuth = authService.getAccessToken();
 if(!userAuth){
 //console.log('User is not authenticated');
 $location.path('/signin');
 }
 }
 });
 }]);*/







//===============Code is working========================
/*.run(function($rootScope , $location){
 $rootScope.$on('$routeChangeStart',function(event , next){
 var firebaseToken = localStorage.token;
 console.log('firebaseToken ' ,firebaseToken);
 if(next.loggedInRequired && !firebaseToken){
 event.preventDefault();
 $location.path('/signin');
 console.log('You are not logged in');
 }
 else if(!next.loggedInRequired && firebaseToken) {
 event.preventDefault();
 //$location.path('/dashboard');
 console.log('You are logged in');
 }
 })
 });
 */