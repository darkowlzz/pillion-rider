function DatabaseService ($rootScope, $http) {
  const API_SERVER = 'http://localhost:3000';
  const API_VERSION = '/api/v1';

  // Request Wrapper to perform http request
  function requestWrapper (rqst) {
    console.log('in request wrapper');
    let promise = $http(rqst).then((resp) => {
      console.log('got response');
      console.log(resp.status);
      return resp.data;
    }, (err) => {
      if (err.status === 401) {
        //$rootScope.$broadcast(AUTH_EVENTS.logoutSuccess);
      }
    });
    return promise;
  }

  return {
    login: function login (loginData) {
      let req = {
        method: 'POST',
        url: API_SERVER + '/login',
        data: loginData
      }
      return requestWrapper(req);
    },

    // Create a ride
    createRide: function createRide (rideData) {
      console.log('in db createRide');
      rideData.riderID = $rootScope.user.userID;
      let req = {
        method: 'POST',
        url: API_SERVER + API_VERSION + '/ride/create',
        data: rideData
      }
      return requestWrapper(req);
    },

    // Get ride details

    getRide: function getRide (rideID) {
      let req = {
        method: 'GET',
        url: API_SERVER + API_VERSION + '/ride/' + rideID
      }
      return requestWrapper(req);
    },

    // Accept ride
    acceptRide: function acceptRide (rideID) {
      let req = {
        method: 'PUT',
        url: API_SERVER + API_VERSION + '/ride/' + rideID + '/accept',
        data: $rootScope.user.userID
      }
      return requestWrapper(req);
    },

    // Delete ride
    deleteRide: function deleteRide (rideID) {
      let req = {
        method: 'DELETE',
        url: API_SERVER + API_VERSION + '/ride/' + rideID
      }
      return requestWrapper(req);
    }
  }
}

DatabaseService.$inject = ['$rootScope', '$http'];

export { DatabaseService };
