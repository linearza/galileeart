import { helper } from '@ember/component/helper';

export default helper(function aGet([model, attr]) {
  return model && model.get(attr);
});
