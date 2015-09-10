class SearchController {
  constructor ($rootScope, database, $window) {
    this.window = $window;
    this.rides = [];
    this.loading = true;

    $rootScope.$on('PILLION-SEARCH', () => {
      database.getAllRides().then((r) => {
        this.loading = false;
        this.rides = r;
      });
    });
  }

  ridePage (rideID) {
    this.window.open('/#/ride/' + rideID, '_blank');
  }
}

SearchController.$inject = ['$rootScope', 'database', '$window'];

export { SearchController };
