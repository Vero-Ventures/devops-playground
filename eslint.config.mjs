import { FlatCompat } from '@eslint/eslintrc';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginNext from 'eslint-plugin-next';
import eslintConfigPrettier from 'eslint-config-prettier';

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat();

export default [
    {
        languageOptions: {
            globals: {
                React: 'writable',  // Global React variable
                module: 'writable',  // For module imports/exports
                process: 'writable',  // Node.js process
            },
        },
        ignorePatterns: ['*.py', 'node_modules/'],  // Ignore Python files

        rules: {
            'semi': ['error', 'always'],  // Require semicolons
            'quotes': ['error', 'double'],  // Enforce double quotes
            'indent': ['error', 2],  // Enforce 2-space indentation
        },
    },
    {
        plugins: [pluginReact, pluginReactHooks, pluginNext],  // React, React Hooks, and Next.js plugins
        rules: {
            'react/jsx-uses-react': 'error',  // Ensure React components are used
            'react/jsx-uses-vars': 'error',  // Prevent unused variables in JSX
            'react-hooks/rules-of-hooks': 'error',  // Enforce React Hooks rules
            'react-hooks/exhaustive-deps': 'warn',  // Check hook dependency arrays
            'next/no-html-link-for-pages': 'error',  // Enforce Next.js conventions
        },
    },
    eslintConfigPrettier,  // Ensure compatibility with Prettier
];
