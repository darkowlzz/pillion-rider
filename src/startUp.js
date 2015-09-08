function startUp ($rootScope, $state, $window, Session, Auth) {
  $rootScope.user = {};

  if (!! Session.sessionData.signedIn) {
    $rootScope.user = Session.sessionData;
  } else {
    $state.go('login');
  }

  $rootScope.signOut = function () {
    Auth.logout();
  }

  $rootScope.$on('SUCCESS', showHome);
  $rootScope.$on('LOGOUT', showLogin);

  function showHome () {
    console.log('got SUCCESS event');
    $state.go('home');
  }

  function showLogin () {
    Session.destroy();
    $rootScope.user = {};
    $window.location.href = '/';
  }
}

startUp.$inject = ['$rootScope', '$state', '$window', 'Session', 'Auth'];

export { startUp };
