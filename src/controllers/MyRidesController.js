class MyRidesController {
  constructor (database, $window) {
    this.window = $window;
    this.rides = [];
    database.getMyRides().then((r) => {
      this.rides = r;
    });
  }

  ridePage (rideID) {
    this.window.open('/#/ride/' + rideID, '_blank');
  }

}

MyRidesController.$inject = ['database', '$window'];

export { MyRidesController };
