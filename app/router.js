import EmberRouter from '@ember/routing/router';
import config from 'galileeart/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('contact-us');
  this.route('about-us');
});
