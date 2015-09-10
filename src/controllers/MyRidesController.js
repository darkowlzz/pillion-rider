class MyRidesController {
  constructor ($rootScope, database, $window) {
    this.window = $window;
    this.rides = [];
    this.loading = true;

    $rootScope.$on('PILLION-MYRIDES', () => {
      database.getMyRides().then((r) => {
        this.loading = false;
        this.rides = r;
      });
    });
  }

  ridePage (rideID) {
    this.window.open('/#/ride/' + rideID, '_blank');
  }

}

MyRidesController.$inject = ['$rootScope', 'database', '$window'];

export { MyRidesController };
