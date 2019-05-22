var orientations = require('../utils/orientationHelper').orientations;
var rotate = require('../utils/orientationHelper').rotate;

function right(ROBOT_POSITION) {
    const i = orientations.indexOf(ROBOT_POSITION.f);
    ROBOT_POSITION.f = rotate(i + 1);
    return ROBOT_POSITION;
}

module.exports = right;