
const moveMapping = {
    'NORTH': {
        direction: '+',
        axis: 'y'
    },
    'SOUTH': {
        direction: '-',
        axis: 'y'
    },
    'WEST': {
        direction: '-',
        axis: 'x'
    },
    'EAST': {
        direction: '+',
        axis: 'x'
    }
}

function move(ROBOT_POSITION) {
    const axis = moveMapping[ROBOT_POSITION.f].axis;
    const direction = moveMapping[ROBOT_POSITION.f].direction;

    const axis_value = ROBOT_POSITION[axis];
    ROBOT_POSITION[axis] = eval(axis_value + direction + 1);
    console.log(axis_value, direction, 1, ROBOT_POSITION[axis]);
    return ROBOT_POSITION;
}

module.exports = move;