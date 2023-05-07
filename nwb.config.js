module.exports = {
  type: 'react-component',
  npm: {
    esModules: false,
    // umd: {
    //   global: 'ReactTraceChart',
    //   externals: {
    //     react: 'React'
    //   }
    // }
  },
  webpack: {
    rules: {
      babel: {
        test: /\.jsx?/,
      },
    },
    styles: {
    },
    terser: {
      terserOptions: {
        mangle: true,
        beautify: false,
        // sourceMap: false
      },
    },
    extra: {
      resolve: {
        extensions: ['.js', '.jsx', '.json', '.css'],
      },
      node: {
        process: false,
      }
    },
  },
}
