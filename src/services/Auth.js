function AuthService ($rootScope, Session, database) {
  return {
    fbLogin: function fbLogin () {
      console.log('inside fbLogin');
      FB.login((response) => {
        if (response.status === 'connected') {
          console.log('fb connected');
          FB.api('/me?fields=id,name,picture', (resp) => {
            let loginData = {
              accessToken: response.authResponse.accessToken,
              userID: resp.id,
              name: resp.name,
              picture: resp.picture.data.url
            };
            database.login(loginData).then((r) => {
              console.log('got response', r);
              if (!! r.success) {
                Session.create(loginData.name, r.token, loginData.accessToken,
                               loginData.userID, loginData.picture);
                $rootScope.user = Session.sessionData;
                $rootScope.$broadcast('SUCCESS');
              } else {
                //$rootScope.$broadcast('FAILED');
                console.log('IT FAILED!!');
              }
            }, (err) => {
              // HANDLE THIS
            });
          });
        } else if (response.status === 'not_authorized') {

        } else {

        }
      });
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
