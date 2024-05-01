import { FlatCompat } from '@eslint/eslintrc';
import path from 'path'
import { fileURLToPath } from 'url'
import pluginJs from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier';

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({ baseDirectory: __dirname, recommendedConfig: pluginJs.configs.recommended })

export default [
    {
        languageOptions: {
            globals: {
                React: 'writable',  // Global React variable
                module: 'writable',  // For module imports/exports
                process: 'writable',  // Node.js process
            },
        },
        ignores: ['*.py', 'node_modules/'],  // Ignore Python files

        rules: {
            'semi': ['error', 'always'],  // Require semicolons
            'quotes': ['error', 'double'],  // Enforce double quotes
            'indent': ['error', 2],  // Enforce 2-space indentation
            'no-console': 'warn',  // Warn about console.log
        },
    },
    ...compat.extends('eslint:recommended'),  // Use recommended rules (ESLint 8+
    eslintConfigPrettier,  // Ensure compatibility with Prettier
];
