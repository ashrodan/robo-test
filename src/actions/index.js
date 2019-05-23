const doCommand = (parsed_input, ROBOT_POSITION) => {
    const action = parsed_input[0];
    const pos = parsed_input[1];

    if (action != 'PLACE' && !ROBOT_POSITION.onBoard) {
        console.log('Robot has not been placed on the board');
        return;
    }

    require(`../actions/${action}`)(ROBOT_POSITION, pos);
}

module.exports = doCommand;