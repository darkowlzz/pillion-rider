class LoginController {
  constructor ($rootScope, $state, Auth) {
    if (!! $rootScope.user.signedIn) {
      $state.go('home');
    } else {
      this.Auth = Auth;
      this.loading = false;
    }
  }

  fbLogin () {
    this.loading = true;
    this.Auth.fbLogin();
  }

}

LoginController.$inject = ['$rootScope', '$state', 'Auth'];

export { LoginController };
