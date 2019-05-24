var readlineSync = require('readline-sync');
var doCommand = require('./src/actions');
var parseInput = require('./src/utils/parserHelpers');
var logger = require('./src/utils').logger;
var upperStr = require('./src/utils').upperStr;

process.env['DEBUG'] = true;

readlineSync.setDefaultOptions({ prompt: '🤖 >> ' });

const ROBOT_POSITION = {
    x: 0,
    y: 0,
    f: 'NORTH',
    onBoard: false
}

const processCommand = (command) => {
    const parsed_input = parseInput(command);
    if (parsed_input.length == 0) {
        logger(`Failed to parse input. Please enter a command starting with PLACE LEFT RIGHT MOVE`);
        return;
    }
    process.env['DEBUG'] && logger(`Command parsed: ${upperStr(command)}. ${JSON.stringify(parsed_input)}`);

    doCommand(parsed_input, ROBOT_POSITION);
}

while (true) {
    const command = readlineSync.prompt();

    processCommand(command);
}

