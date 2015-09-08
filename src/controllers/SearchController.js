class SearchController {
  constructor (database, $window) {
    this.window = $window;
    this.rides = [];
    database.getAllRides().then((r) => {
      console.log('got all rides:', r);
      this.rides = r;
    });
  }

  ridePage (rideID) {
    console.log('rideID: ', rideID);
    this.window.open('/#/ride/' + rideID, '_blank');
  }
}

SearchController.$inject = ['database', '$window'];

export { SearchController };
