function place(ROBOT_POSITION, pos) {
    ROBOT_POSITION.f = pos.f;
    ROBOT_POSITION.x = pos.x;
    ROBOT_POSITION.y = pos.y;
    ROBOT_POSITION.onBoard = true;

    return ROBOT_POSITION;
}

module.exports = place;