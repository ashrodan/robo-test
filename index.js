var readlineSync = require('readline-sync');

const DEBUG = true;
const ACCEPTED_COMMAND = ['PLACE', 'MOVE', 'LEFT', 'RIGHT', 'REPORT'];
const ACCEPTED_ORIENTATIONS = ['NORTH', 'SOUTH', 'EAST', 'WEST'];

readlineSync.setDefaultOptions({ prompt: 'Input >> ' });

var x = 0;
var y = 0;
var f = 'NORTH';
var onBoard = false;

const logger = (write_log) => console.log(`${DEBUG ? '[DEBUG] ' : ''}${write_log}`);
const upperStr = (str) => String(str).toUpperCase();
const parseInput = (command) => {
    // TODO: first valid input is 
    if (!command) {
        return []
    };
    const command_split = command.split(' ');
    const command_initiator = upperStr(command_split[0]);
    const includes = ACCEPTED_COMMAND.includes(command_initiator);

    if (includes && command_initiator != 'PLACE') {
        return [command_initiator]
    };

    if (includes && command_initiator == 'PLACE') {
        //todo: parse command_split[3]
        return [command_initiator, command_split[1], command_split[2], command_split[3]]
    };

    return [];
};

// const doCommand = (parseInput) => {


// }

const processCommand = (command) => {
    const parsed_input = parseInput(command);
    if (parsed_input.length == 0) {
        logger(`Input failed to parse. Please enter a command starting such as ${ACCEPTED_COMMAND}`)
        return;
    }
    DEBUG && logger(`Command accepted: ${upperStr(command)}. ${JSON.stringify(parsed_input)}`);

    doCommand(parseInput);
}

while (true) {
    const command = readlineSync.prompt();

    processCommand(command);
}