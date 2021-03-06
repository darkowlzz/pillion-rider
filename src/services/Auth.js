function AuthService ($rootScope, Session, database) {
  return {
    fbLogin: function fbLogin (notMainPage) {
      FB.login((response) => {
        if (response.status === 'connected') {
          FB.api('/me?fields=id,name,picture', (resp) => {
            let loginData = {
              accessToken: response.authResponse.accessToken,
              userID: resp.id,
              name: resp.name,
              picture: resp.picture.data.url
            };
            database.login(loginData).then((r) => {
              if (!! r.success) {
                Session.create(loginData.name, r.token, loginData.accessToken,
                               loginData.userID, loginData.picture);
                $rootScope.user = Session.sessionData;
                if (notMainPage) {
                  // do nothing
                } else {
                  $rootScope.$broadcast('SUCCESS');
                }
              } else {
                //$rootScope.$broadcast('FAILED');
              }
            }, (err) => {
              // HANDLE THIS
            });
          });
        } else if (response.status === 'not_authorized') {

        } else {

        }
      }, {scope: 'public_profile,email,user_friends',
          return_scopes: true});
    },

    logout: function logout () {
      FB.getLoginStatus((resp) => {
        if (resp.status === 'connected') {
          FB.logout((response) => {
            $rootScope.$broadcast('LOGOUT');
          })
        }
      })
    }
  }
}

AuthService.$inject = ['$rootScope', 'Session', 'database'];

export { AuthService };
