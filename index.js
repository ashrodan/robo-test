var readlineSync = require('readline-sync');
var doCommand = require('./src/actions')

const DEBUG = true;
const ACCEPTED_COMMAND = ['PLACE', 'MOVE', 'LEFT', 'RIGHT', 'REPORT'];

readlineSync.setDefaultOptions({ prompt: 'Input >> ' });

const ROBOT_POSITION = {
    x: 0,
    y: 0,
    f: 'NORTH',
    onBoard: false
}

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

    if (!includes) {
        return [];
    };

    if (command_initiator == 'PLACE' && command_split.length == 1) {
        // TODO: split out parsing of place command
        const place_commands = command_split[1].split(',');
        if (!place_commands) {
            logger('Missing PLACE commands. Example: PLACE 0,0,NORTH')
            return [];
        }
        const pos = { x: place_commands[0], y: place_commands[1], f: place_commands[2] };
        return [command_initiator, pos];
    }

    return [command_initiator];
};

const processCommand = (command) => {
    const parsed_input = parseInput(command);
    if (parsed_input.length == 0) {
        logger(`Failed to parse input. Please enter a command starting with ${ACCEPTED_COMMAND}`)
        return;
    }
    DEBUG && logger(`Command accepted: ${upperStr(command)}. ${JSON.stringify(parsed_input)}`);

    doCommand(parsed_input, ROBOT_POSITION);
}

while (true) {
    const command = readlineSync.prompt();

    processCommand(command);
}

