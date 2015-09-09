function DatabaseService ($rootScope, $http) {
  const API_SERVER = 'http://localhost:3000';
  //const API_SERVER = 'https://pillionrider.herokuapp.com';
  const API_VERSION = '/api/v1';

  // Request Wrapper to perform http request
  function requestWrapper (rqst) {
    let promise = $http(rqst).then((resp) => {
      return resp.data;
    }, (err) => {
      if (err.status === 401) {
        $rootScope.$broadcast('LOGOUT');
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
      rideData.riderID = $rootScope.user.userID;
      rideData.riderName = $rootScope.user.username;
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
        url: API_SERVER + '/ride/' + rideID
      }
      return requestWrapper(req);
    },

    getAllRides: function getAllRides () {
      let req = {
        method: 'GET',
        url: API_SERVER + API_VERSION + '/rides'
      };
      return requestWrapper(req);
    },

    getMyRides: function getMyRides () {
      let req = {
        method: 'GET',
        url: API_SERVER + API_VERSION + '/myrides/' + $rootScope.user.userID
      };
      return requestWrapper(req);
    },

    // Accept ride
    acceptRide: function acceptRide (rideID) {
      let req = {
        method: 'PUT',
        url: API_SERVER + API_VERSION + '/ride/' + rideID + '/accept',
        data: {
          userID: $rootScope.user.userID,
          username: $rootScope.user.username
        }
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
