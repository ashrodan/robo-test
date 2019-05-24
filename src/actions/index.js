var move = require('./MOVE');
var left = require('./LEFT');
var right = require('./RIGHT');
var place = require('./PLACE');
var report = require('./REPORT');


const actions = {
    'MOVE': move,
    'LEFT': left,
    'RIGHT': right,
    'PLACE': place,
    'REPORT': report
}


const doCommand = (parsed_input, ROBOT_POSITION) => {
    const action = parsed_input[0];
    const pos = parsed_input[1];

    if (action != 'PLACE' && !ROBOT_POSITION.onBoard) {
        console.log('Robot has not been placed on the board');
        return;
    }

    actions[action](ROBOT_POSITION, pos);
}

module.exports = doCommand;