module.exports = {
  ignoreFiles: './public/**',
  rules: {
    'block-no-empty': null,
    'string-quotes': 'single',
    'color-no-invalid-hex': true,
    'comment-whitespace-inside': 'always',
    'number-leading-zero': 'always',
    'no-invalid-double-slash-comments': true,
    'declaration-bang-space-after': 'never',
    'declaration-block-semicolon-newline-after': 'always',
    indentation: [2],
    'max-empty-lines': 1,
    'rule-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['after-comment']
      }
    ]
  }
};
