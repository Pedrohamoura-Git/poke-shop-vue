module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    "no-console": ["error", {
      "allow": ["warn", "error", "log"]
    }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}