var logger = require('../utils/index').logger;

const report = (ROBOT_POSITION) => {
    logger(`Robot is positioned x: ${ROBOT_POSITION.x} y: ${ROBOT_POSITION.y} facing: ${ROBOT_POSITION.f}`);
}

module.exports = report;