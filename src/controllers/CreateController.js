class CreateController {
  constructor (database, $location) {
    this.database = database;
    this.location = $location;

    this.loading = false;
    this.submitted = false;
    this.form = {
      rideName: '',
      location: '',
      time: ''
    };
    this.result = {};
  }

  createRide () {
    this.loading = true;
    this.database.createRide(this.form).then((response) => {
      this.result = response.ride;
      this.submitted = true;
    });
  }

  shareTimeline () {
    let link = this.location.host() + '/#/ride/' + this.result.rideID;
    FB.ui({
      method: 'feed',
      link: link,
      caption: 'Join me on ' + this.form.rideName + ' as a pillion rider.',
      description: 'Pillion Rider. A place to find pillion riders and get found by people who are looking for pillion riders.'
    });
  }

  shareMessage () {
    let link = this.location.host() + '/#/ride/' + this.result.rideID;
    FB.ui({
      method: 'send',
      link: link
    });
  }
}

CreateController.$inject = ['database', '$location'];

export { CreateController }
