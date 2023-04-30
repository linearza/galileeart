import Service from '@ember/service';
import Airtable from 'airtable';
import ENV from 'galileeart/config/environment';
import { tracked } from '@glimmer/tracking';

/*
  TODO:
  - make this more generic
  - setup ember data records and push into the store
  - tailwind for layout
  - form to submit per item
*/

export default class AirtableService extends Service {
  // Tracked properties
  @tracked allArt = [];

  // Lifecycle hooks
  constructor(owner, args) {
    super(owner, args);

    this.base = new Airtable({ apiKey: ENV.APP.airtableKey }).base(
      'appDZg6YA8ZUu54ya'
    );

    this.fetchAllArt();
  }

  // Methods
  fetchAllArt() {
    this.base('Art')
      .select({
        // Selecting the first 3 records in All art:
        // maxRecords: 3,
        view: 'All art',
      })
      .eachPage(
        // page
        (records, fetchNextPage) => {
          // This function (`page`) will get called for each page of records.
          records.forEach((record) => {
            this.allArt = [...this.allArt, record];
          });

          // To fetch the next page of records, call `fetchNextPage`.
          // If there are more records, `page` will get called again.
          // If there are no more records, `done` will get called.
          fetchNextPage();
        },
        // done
        (err) => {
          if (err) {
            console.error(err);
            return;
          }
        }
      );
  }
}
