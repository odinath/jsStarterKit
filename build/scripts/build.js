/* eslint-disable no-console */

import webpack from 'webpack';
import webpackConfig from '../../webpack.config.production';
import chalk from 'chalk';

// required by Babel
process.env.NODE_ENV = 'production';

console.log(chalk.blue('Generating minified bundle for production...'));

webpack(webpackConfig).run((error, stats) => {
    if (error) {
        console.log(chalk.red(error));
        return 1; // error
    }
    const jsonStats = stats.toJson();

    if (jsonStats.hasErrors) {
        return jsonStats.errors.map(error => {
            console.log(chalk.red(error));
        });
    }

    if (jsonStats.hasWarnings) {
        console.log(chalk.yellow('Webpack generated the following warnings: '));
        jsonStats.warnings.map(warning => {
            console.log(chalk.yellow(warning));
        });
    }

    console.log(`Webpack stats: ${stats}`);

    // if we go this far, the build succeeded
    console.log(chalk.green("Your app has been built for production and written to '/dist'"));

    return 0; // success

});
