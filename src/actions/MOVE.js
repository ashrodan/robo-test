
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

const incrementMove = (axis_value, direction) => {
    const val = eval(axis_value + direction + 1);
    if (val > 5) {
        return axis_value
    }
    if (val < 0) {
        return axis_value
    }
    return val;
}

function move(ROBOT_POSITION) {
    const axis = moveMapping[ROBOT_POSITION.f].axis;
    const direction = moveMapping[ROBOT_POSITION.f].direction;

    const axis_value = ROBOT_POSITION[axis];
    ROBOT_POSITION[axis] = incrementMove(axis_value, direction);
    // console.log(axis_value, direction, 1, ROBOT_POSITION[axis]);
    return ROBOT_POSITION;
}

module.exports = move;