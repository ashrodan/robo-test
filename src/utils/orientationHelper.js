const ACCEPTED_ORIENTATIONS = ['NORTH', 'EAST', 'SOUTH', 'WEST'];
const rotate = (position) => ACCEPTED_ORIENTATIONS[(position % 4 + 4) % 4]

module.exports = {
    orientations: ACCEPTED_ORIENTATIONS,
    rotate
}