'use strict';

module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-prettier/recommended'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['extends', 'tailwind'],
      },
    ],
    'block-no-empty': null,
    'no-invalid-position-at-import-rule': null,
    'selector-class-pattern': null,
  },
};
