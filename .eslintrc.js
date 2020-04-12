module.exports = {
    root: true,
    env: {
        node: true,
    },
    'extends': [
        'plugin:vue/essential',
        // 'eslint:recommended',
    ],
    rules: {
        'semi': ['error', 'always'],
        'comma-dangle': ['error', 'always-multiline'],
        'indent': ['error', 4],
        // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': 0,//  process.env.NODE_ENV === 'production' ? 'error' : 'off',
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
};