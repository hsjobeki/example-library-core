import babel from '@rollup/plugin-babel';
import image from '@rollup/plugin-image';
import external from 'rollup-plugin-peer-deps-external';
import del from 'rollup-plugin-delete';
import pkg from './package.json';
import multi from '@rollup/plugin-multi-entry';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    input: [pkg.source],
    output: [
        { file: pkg.main, format: 'cjs' },
        { file: pkg.module, format: 'esm' }
    ],
    plugins: [
        multi(),
        image(),
        external(),
        babel({
            babelHelpers: 'bundled',
            exclude: 'node_modules/**'
        }),
        del({ targets: ['dist/*'] }),
    ],
    external: Object.keys(pkg.peerDependencies || {}),
};