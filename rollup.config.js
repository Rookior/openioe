import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/openioe.js',
        // format: 'cjs',  //默认值
        //当入口文件有export时，'umd'格式必须指定name。这样，在通过<script>标签引入时，才能通过name访问到export的内容
         format: 'umd',
         name: 'openioe'
    },
    plugins: [resolve(), babel({ babelHelpers: 'bundled' })]
};