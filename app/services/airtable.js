import Service from '@ember/service';
import Airtable from 'airtable';
import ENV from 'galileeart/config/environment';
import { tracked } from '@glimmer/tracking';

export default class AirtableService extends Service {
  // Tracked properties
  @tracked allFurniture = [];

  // Lifecycle hooks
  constructor(owner, args) {
    super(owner, args);

    this.base = new Airtable({ apiKey: ENV.APP.airtableKey }).base(
      'appDZg6YA8ZUu54ya'
    );

    this.fetchAllFurniture();
  }

  // Methods
  fetchAllFurniture() {
    this.base('Furniture')
      .select({
        // Selecting the first 3 records in All furniture:
        // maxRecords: 3,
        view: 'All furniture',
      })
      .eachPage(
        // page
        ((records, fetchNextPage) => {
          // This function (`page`) will get called for each page of records.
          records.forEach((record) => {
            this.allFurniture = [...this.allFurniture, record];
          });

          // To fetch the next page of records, call `fetchNextPage`.
          // If there are more records, `page` will get called again.
          // If there are no more records, `done` will get called.
          fetchNextPage();
        }),
        // done
        ((err) => {
          if (err) {
            console.error(err);
            return;
          }
        })
      );
  }
}
