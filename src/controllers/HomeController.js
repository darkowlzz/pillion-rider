class HomeController {
  constructor ($rootScope, $mdDialog) {
    this.rootScope = $rootScope;
    this.mdDialog = $mdDialog;

    this.picture = $rootScope.user.picture;
  }
}

HomeController.$inject = ['$rootScope', '$mdDialog' ]

export { HomeController }
