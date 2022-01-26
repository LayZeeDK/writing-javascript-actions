import core from '@actions/core';

import getJoke from './joke';

const joke = await getJoke();

console.log(joke);
core.setOutput("joke-output", joke);
