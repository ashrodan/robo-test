const doCommand = (parsed_input, ROBOT_POSITION) => {
    const action = parsed_input[0];
    const pos = parsed_input[1];
    require(`../actions/${action}`)(ROBOT_POSITION, pos);
}

module.exports = doCommand;