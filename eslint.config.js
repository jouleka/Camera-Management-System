const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const angular = require('angular-eslint');
module.exports = tseslint.config(
  { ignores: ['dist/**', 'target/**', 'node_modules/**', '.angular/**'] },
  { files: ['src/**/*.ts'], languageOptions: { parser: tseslint.parser },
    plugins: { '@typescript-eslint': tseslint.plugin },
    rules: { 'no-eval': 'error', 'no-implied-eval': 'error', 'no-new-func': 'error',
      'constructor-super': 'error', 'no-constant-condition': 'error', 'no-dupe-args': 'error',
      'no-dupe-else-if': 'error', 'no-duplicate-case': 'error', 'no-unreachable': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }] } },
  { files: ['src/**/*.html'], languageOptions: { parser: angular.templateParser },
    plugins: { '@angular-eslint/template': angular.templatePlugin },
    rules: { '@angular-eslint/template/banana-in-box': 'error',
      '@angular-eslint/template/eqeqeq': 'error', '@angular-eslint/template/no-negated-async': 'error' } }
);
