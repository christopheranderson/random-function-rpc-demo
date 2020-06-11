
const { run } = require('../utils');

module.exports = async function (context, myQueueItem) {
    context.log('JavaScript queue trigger function processed work item', myQueueItem);

    const { path } = myQueueItem;

    const results = await run(['ls'], path || process.cwd());

    context.bindings.output = {
        results
    }
};