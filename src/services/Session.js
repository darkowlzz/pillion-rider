function SessionService ($rootScope, localStorageService) {
  return {
    create: function create (username, token, fbToken, userID, picture) {
      localStorageService.set('username', username);
      localStorageService.set('accessToken', token);
      localStorageService.set('fbToken', fbToken);
      localStorageService.set('signedIn', true);
      localStorageService.set('userID', userID);
      localStorageService.set('picture', picture);
    },

    set username (name) {
      localStorageService.set('username', name);
      $rootScope.user.username = name;
    },

    set signedIn (status) {
      localStorageService.set('signedIn', status);
      $rootScope.user.signedIn = status;
    },

    set userID (id) {
      localStorageService.set('userID', id);
      $rootScope.user.userID = id;
    },

    destroy: function destroy () {
      localStorageService.remove('username', 'fbToken',
                                 'accessToken', 'userID');
      localStorageService.set('signedIn', false);
    },

    get sessionData () {
      return {
        username: localStorageService.get('username'),
        accessToken: localStorageService.get('accessToken'),
        fbToken: localStorageService.get('fbToken'),
        signedIn: Boolean(localStorageService.get('signedIn')),
        userID: localStorageService.get('userID'),
        picture: localStorageService.get('picture')
      };
    }
  }
}

SessionService.$inject = ['$rootScope', 'localStorageService'];

export { SessionService };
