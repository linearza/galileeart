import { module, test } from 'qunit';
import { setupTest } from 'galileeart/tests/helpers';

module('Unit | Service | airtable', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:airtable');
    assert.ok(service);
  });
});
