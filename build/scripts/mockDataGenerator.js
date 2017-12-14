/* eslint-disable no-console */

import jsf from 'json-schema-faker';
import {schema} from './mockDataSchema';
import fs from 'fs';
import chalk from 'chalk';

const json = JSON.stringify(jsf(schema));

fs.writeFile("./data/mockData.json", json, function(errorMessage){
    if (errorMessage) {
        return console.log(chalk.red(errorMessage));
    } else {
        console.log(chalk.green("Mock data generated."));
    }
});
