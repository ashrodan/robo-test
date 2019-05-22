const doCommand = (parsed_input, ROBOT_POSITION) => {
    const action = parsed_input[0];
    require(`../actions/${action}`)(ROBOT_POSITION);
}

module.exports = doCommand;