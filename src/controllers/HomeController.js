class HomeController {
  constructor ($rootScope, $mdDialog) {
    this.rootScope = $rootScope;
    this.mdDialog = $mdDialog;

    this.picture = $rootScope.user.picture;
  }

  friends () {
    console.log('getting friends...');
    FB.api('/me/friends', (resp) => {
      console.log('got resp', resp);
    });
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
