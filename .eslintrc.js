module.exports = {
    parser: 'babel-eslint',
    'rules': {
        'indent': [
            'error',
            2,
            { 'SwitchCase': 1 }
        ],
        'linebreak-style': [
            'error',
            'windows'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
        'no-unused-vars': 0,
        'no-plusplus': 0,
        'no-underscore-dangle': 0,
        'no-await-in-loop': 0,
    },
    extends: ['airbnb-base'],
    "env": {
        "browser": true,
        "node": true,
    },
};