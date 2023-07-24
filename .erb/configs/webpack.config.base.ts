/**
 * Base webpack config used across other specific configs
 */

// @ts-ignore
import webpack from 'webpack';
import TsconfigPathsPlugins from 'tsconfig-paths-webpack-plugin';
import webpackPaths from './webpack.paths';
// @ts-ignore
import { dependencies as externals } from '../../release/app/package.json';

const configuration: webpack.Configuration = {
  externals: [...Object.keys(externals || {})],

  stats: 'errors-only',

  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            // Remove this line to enable type checking in webpack builds
            transpileOnly: true,
            compilerOptions: {
              module: 'esnext'
            }
          }
        }
      }
      // {
      //   test: /\.prisma$/,
      //   use: 'prisma-loader'
      // }
    ]
  },

  output: {
    path: webpackPaths.srcPath,
    // https://github.com/webpack/webpack/issues/1114
    library: {
      type: 'commonjs2'
    }
  },

  /**
   * Determine the array of extensions that should be used to resolve modules.
   */
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    modules: [webpackPaths.srcPath, 'node_modules'],
    // There is no need to add aliases here, the paths in tsconfig get mirrored
    plugins: [new TsconfigPathsPlugins()],
    fallback: {
      fs: false, // Disable the fs module fallback
      path: require.resolve('path-browserify') // Use path-browserify package as a fallback
    }
  },

  plugins: [
    new webpack.DefinePlugin({
      __dirname: '__dirname'
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production',
      DB_NAME: 'store.db',
      DB_HOST: 'http://localhost',
      DB_PORT: 5432,
      PORT: 1212
    })
  ]
};

export default configuration;
