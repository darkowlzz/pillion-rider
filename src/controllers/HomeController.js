class HomeController {
  constructor ($rootScope, $mdDialog) {
    this.rootScope = $rootScope;
    this.mdDialog = $mdDialog;

    this.picture = $rootScope.user.picture;
  }

  searchSelected () {
    this.rootScope.$broadcast('PILLION-SEARCH');
  }

  myRidesSelected () {
    this.rootScope.$broadcast('PILLION-MYRIDES');
  }
}

HomeController.$inject = ['$rootScope', '$mdDialog' ]

export { HomeController }
