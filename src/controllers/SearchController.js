class SearchController {
  constructor (database, $window) {
    this.window = $window;
    this.rides = [];
    this.loading = true;

    database.getAllRides().then((r) => {
      this.loading = false;
      this.rides = r;
    });
  }

  ridePage (rideID) {
    this.window.open('/#/ride/' + rideID, '_blank');
  }
}

SearchController.$inject = ['database', '$window'];

export { SearchController };
