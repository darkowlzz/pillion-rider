class CreateController {
  constructor (database) {
    this.database = database;

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
    console.log('createing ride with data', this.form);
    this.database.createRide(this.form).then((response) => {
      console.log('response:', response);
      this.result = response.ride;
      this.submitted = true;
    });
  }

  shareTimeline () {
    FB.ui({
      method: 'share',
      href: 'http://example.com/' + this.result.rideID
    });
  }

  shareMessage () {
    FB.ui({
      method: 'send',
      link: 'http://example.com/' + this.result.rideID
    });
  }
}

CreateController.$inject = ['database'];

export { CreateController }
