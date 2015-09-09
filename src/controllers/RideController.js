class RideController {
  constructor ($rootScope, $window, $stateParams, database, Auth) {
    this.rootScope = $rootScope;
    this.window = $window;
    this.database = database;
    this.stateParams = $stateParams;
    this.Auth = Auth;
    this.accepted = false;
    this.ride = {
      rideName: '',
      rider: '',
      pillion: '',
      location: '',
      time: ''
    };
    database.getRide($stateParams.rideID).then((resp) => {
      this.ride.rideName = resp.rideName;
      this.ride.location = resp.location;
      this.ride.time = resp.time;
      this.ride.riderName = resp.riderName;
      this.ride.riderFB = 'http://www.facebook.com/' + resp.riderID;
      this.ride.pillionName = resp.pillionName;
      this.ride.pillionFB = 'http://www.facebook.com/' + resp.pillionID;
      if (! _.isEmpty(this.ride.pillionName)) {
        this.accepted = true;
      }
    });
  }

  login () {
    this.Auth.fbLogin(true);
  }

  accept () {
    this.database.acceptRide(this.stateParams.rideID).then((resp) => {
      this.ride.pillion = this.rootScope.user.username;
      this.window.location.reload();
    });
  }
}

RideController.$inject = ['$rootScope', '$window', '$stateParams', 'database', 'Auth'];

export { RideController };
