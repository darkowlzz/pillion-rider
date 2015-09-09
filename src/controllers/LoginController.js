class LoginController {
  constructor ($rootScope, $state, Auth) {
    if (!! $rootScope.user.signedIn) {
      $state.go('home');
    } else {
      this.Auth = Auth;
    }
  }

  fbLogin () {
    this.Auth.fbLogin();
  }

}

LoginController.$inject = ['$rootScope', '$state', 'Auth'];

export { LoginController };
