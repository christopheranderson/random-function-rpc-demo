const path = require('path');
const { run } = require('../utils');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const results = await run(['ls'], process.cwd());
    
    context.res = {
        status: 200,
        body: results
    }
};