import { MainController } from './controllers/MainController';
import { LoginController } from './controllers/LoginController';
import { HomeController } from './controllers/HomeController';
import { CreateController } from './controllers/CreateController';
import { SearchController } from './controllers/SearchController';
import { RideController } from './controllers/RideController';
import { MyRidesController } from './controllers/MyRidesController';

import { CreateRide } from './directives/CreateRide';
import { SearchRide } from './directives/SearchRide';
import { MyRides } from './directives/MyRides';

import { DatabaseService } from './services/Database';
import { AuthService } from './services/Auth';
import { SessionService } from './services/Session';
import { AuthInterceptorService } from './services/AuthInterceptor';

import { config } from './config';
import { startUp } from './startUp';

const moduleName = 'PillionRider';

angular
  .module(moduleName, ['ngMaterial', 'ngMdIcons', 'ui.router', 'LocalStorageModule'])
  .controller('MainCtrl', MainController)
  .controller('LoginCtrl', LoginController)
  .controller('HomeCtrl', HomeController)
  .controller('CreateCtrl', CreateController)
  .controller('SearchCtrl', SearchController)
  .controller('RideCtrl', RideController)
  .controller('MyRidesCtrl', MyRidesController)
  .directive('createRide', CreateRide)
  .directive('searchRide', SearchRide)
  .directive('myRides', MyRides)
  .factory('database', DatabaseService)
  .factory('Auth', AuthService)
  .factory('Session', SessionService)
  .factory('authInterceptor', AuthInterceptorService)
  .config(config)
  .run(startUp);
