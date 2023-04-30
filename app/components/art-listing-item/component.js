import Component from '@glimmer/component';

export default class ArtListingItemComponent extends Component {
  // Computed properties
  get firstImage() {
    const { art } = this.args;
    const images = art.get('Images');

    return images[0];
  }
}
