const {exec} = require('child_process');

const run = async function(commands, cwd) {
    return new Promise((resolve, reject) => {
        exec(commands.join(" "), { cwd }, (err, stdout, stderr) => {
            //console.log(stdout);
            //console.error(stderr);

            if(err) {
                reject(err);
                return;
            }

            resolve(stdout);
        });
    });
}

module.exports = { run };