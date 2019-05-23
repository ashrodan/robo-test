var doCommand = require('../src/actions');

const defaultPosition = () => ({
    x: 0,
    y: 0,
    f: 'NORTH',
    onBoard: false
})

test('Does not accept LEFT command before a PLACE command', () => {
    const ROBOT_POSITION = defaultPosition();

    doCommand(['LEFT'], ROBOT_POSITION);
    expect(ROBOT_POSITION.f).toBe('NORTH');

    doCommand(['PLACE', { x: 3, y: 4, f: 'WEST' }], ROBOT_POSITION);
    doCommand(['LEFT'], ROBOT_POSITION);
    expect(ROBOT_POSITION.f).toBe('SOUTH');
})
test('1 LEFT command will rotate robot WEST', () => {
    const ROBOT_POSITION = defaultPosition();
    doCommand(['PLACE', { x: 0, y: 0, f: 'NORTH' }], ROBOT_POSITION);

    doCommand(['LEFT'], ROBOT_POSITION);

    expect(ROBOT_POSITION.f).toBe('WEST');
})
test('2 LEFT command will rotate robot to SOUTH', () => {
    const ROBOT_POSITION = defaultPosition();
    doCommand(['PLACE', { x: 0, y: 0, f: 'NORTH' }], ROBOT_POSITION);

    doCommand(['LEFT'], ROBOT_POSITION);
    doCommand(['LEFT'], ROBOT_POSITION);

    expect(ROBOT_POSITION.f).toBe('SOUTH');
})
test('1 RIGHT command will rotate robot to EAST', () => {
    const ROBOT_POSITION = defaultPosition();
    doCommand(['PLACE', { x: 0, y: 0, f: 'NORTH' }], ROBOT_POSITION);

    doCommand(['RIGHT'], ROBOT_POSITION);

    expect(ROBOT_POSITION.f).toBe('EAST');
})
test('PLACE command will set robot in correct position', () => {
    const ROBOT_POSITION = defaultPosition();

    doCommand(['PLACE', { x: 3, y: 4, f: 'WEST' }], ROBOT_POSITION);

    expect(ROBOT_POSITION.f).toBe('WEST');
    expect(ROBOT_POSITION.x).toBe(3);
    expect(ROBOT_POSITION.y).toBe(4);
    expect(ROBOT_POSITION.onBoard).toBe(true);
})
test('MOVE command will update the robot coordinates facing west', () => {
    const ROBOT_POSITION = defaultPosition();

    doCommand(['PLACE', { x: 2, y: 4, f: 'WEST' }], ROBOT_POSITION);
    doCommand(['MOVE'], ROBOT_POSITION);

    expect(ROBOT_POSITION.f).toBe('WEST');
    expect(ROBOT_POSITION.x).toBe(1);
    expect(ROBOT_POSITION.y).toBe(4);
    expect(ROBOT_POSITION.onBoard).toBe(true);
})
test('MOVE command will update the robot coordinates facing EAST', () => {
    const ROBOT_POSITION = defaultPosition();

    doCommand(['PLACE', { x: 2, y: 4, f: 'EAST' }], ROBOT_POSITION);
    doCommand(['MOVE'], ROBOT_POSITION);

    expect(ROBOT_POSITION.f).toBe('EAST');
    expect(ROBOT_POSITION.x).toBe(3);
    expect(ROBOT_POSITION.y).toBe(4);
    expect(ROBOT_POSITION.onBoard).toBe(true);
})
test('MOVE command will update the robot coordinates facing NORTH', () => {
    const ROBOT_POSITION = defaultPosition();

    doCommand(['PLACE', { x: 2, y: 4, f: 'NORTH' }], ROBOT_POSITION);
    doCommand(['MOVE'], ROBOT_POSITION);

    expect(ROBOT_POSITION.f).toBe('NORTH');
    expect(ROBOT_POSITION.x).toBe(2);
    expect(ROBOT_POSITION.y).toBe(5);
    expect(ROBOT_POSITION.onBoard).toBe(true);
})
test('MOVE command will update the robot coordinates facing SOUTH', () => {
    const ROBOT_POSITION = defaultPosition();

    doCommand(['PLACE', { x: 2, y: 4, f: 'SOUTH' }], ROBOT_POSITION);
    console.log(ROBOT_POSITION);
    doCommand(['MOVE'], ROBOT_POSITION);

    expect(ROBOT_POSITION.f).toBe('SOUTH');
    expect(ROBOT_POSITION.x).toBe(2);
    expect(ROBOT_POSITION.y).toBe(3);
    expect(ROBOT_POSITION.onBoard).toBe(true);
})
test('MOVE command not move robot off the board north side', () => {
    const ROBOT_POSITION = defaultPosition();

    doCommand(['PLACE', { x: 2, y: 4, f: 'NORTH' }], ROBOT_POSITION);
    doCommand(['MOVE'], ROBOT_POSITION);
    doCommand(['MOVE'], ROBOT_POSITION);

    expect(ROBOT_POSITION.y).toBe(5);
})