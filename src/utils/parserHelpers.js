var logger = require('./index').logger;
var upperStr = require('./index').upperStr;

const ACCEPTED_COMMAND = ['PLACE', 'MOVE', 'LEFT', 'RIGHT', 'REPORT'];

const parseInput = (command) => {
    if (!command) {
        return []
    };
    const command_split = command.split(' ');
    const command_initiator = upperStr(command_split[0]);
    const includes = ACCEPTED_COMMAND.includes(command_initiator);

    if (!includes) {
        return [];
    };
    console.log(command_split.length)
    if (command_initiator == 'PLACE' && command_split.length == 1) {
        return []
    }
    if (command_initiator == 'PLACE' && command_split.length == 2) {
        // TODO: split out parsing of place command
        const place_commands = command_split[1].split(',');
        if (!place_commands) {
            logger('Missing PLACE commands. Example: PLACE 0,0,NORTH')
            return [];
        }
        console.log(JSON.stringify(place_commands))
        const pos = { x: place_commands[0], y: place_commands[1], f: place_commands[2] };
        return [command_initiator, pos];
    }

    return [command_initiator];
};

module.exports = parseInput;