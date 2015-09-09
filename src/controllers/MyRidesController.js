class MyRidesController {
  constructor (database, $window) {
    this.window = $window;
    this.rides = [];
    this.loading = true;

    database.getMyRides().then((r) => {
      this.loading = false;
      this.rides = r;
    });
  }

  ridePage (rideID) {
    this.window.open('/#/ride/' + rideID, '_blank');
  }

}

MyRidesController.$inject = ['database', '$window'];

export { MyRidesController };
