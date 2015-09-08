function config ($stateProvider, $urlRouterProvider, $httpProvider) {

  $httpProvider.interceptors.push('authInterceptor');

  $urlRouterProvider.otherwise('/login');

  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginCtrl',
      controllerAs: 'loginCtrl'
    })
    .state('home', {
      url: '/home',
      templateUrl: 'templates/home.html',
      controller: 'HomeCtrl',
      controllerAs: 'homeCtrl'
    })
    .state('home.create', {
      url: '/create',
      templateUrl: 'templates/create.html',
      controller: 'CreateCtrl',
      controllerAs: 'createCtrl'
    })
    .state('home.search', {
      url: '/search',
      templateUrl: 'templates/search.html',
      controller: 'SearchCtrl',
      controllerAs: 'searchCtrl'
    })
    .state('ride', {
      url: '/ride/:rideID',
      templateUrl: 'templates/ride.html',
      controller: 'RideCtrl',
      controllerAs: 'rideCtrl'
    });
}

config.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];

export { config };
