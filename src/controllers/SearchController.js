class SearchController {
  constructor (database, $window) {
    this.window = $window;
    this.rides = [];
    database.getAllRides().then((r) => {
      this.rides = r;
    });
  }

  ridePage (rideID) {
    this.window.open('/#/ride/' + rideID, '_blank');
  }
}

SearchController.$inject = ['database', '$window'];

export { SearchController };
