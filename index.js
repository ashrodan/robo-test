var readlineSync = require('readline-sync');

readlineSync.setDefaultOptions({ prompt: 'Input >> ' });

var x = 0;
var y = 0;

const logger = (write_log) => console.log(write_log);
const upperStr = (str) => String(str).toUpperCase();
const parseInput = (command) => upperStr(command) == 'PLACE' ? true : false;

while (true) {
    const command = readlineSync.prompt();
    logger(command)
    const parsed_input = parseInput(command);
    if (!parsed_input) {
        logger('Input failed to parse. Please enter xxx')
    }
}