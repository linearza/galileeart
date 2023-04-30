import Component from '@glimmer/component';
import { service } from '@ember/service';

export default class ArtListingComponent extends Component {
  // Services
  @service('airtable') airtableService;
}