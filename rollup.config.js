import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/openioe.js'
    },
    plugins: [resolve(), babel({ babelHelpers: 'bundled' })]
};