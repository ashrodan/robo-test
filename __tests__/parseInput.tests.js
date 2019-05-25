var parseInput = require('../src/utils/parserHelpers');

test('Entering in unaccepted command will return an empty array', () => {
    const result = parseInput('blah');
    expect(result.length).toBe(0);
});
test('Entering in `left` will parse to LEFT', () => {
    const result = parseInput('left');
    expect(result[0]).toBe('LEFT');
});
test('Entering in `right` will parse to RIGHT', () => {
    const result = parseInput('right');
    expect(result[0]).toBe('RIGHT');
});
test('Entering in `move` will parse to MOVE', () => {
    const result = parseInput('move');
    expect(result[0]).toBe('MOVE');
});
test('Entering in `report` will parse to REPORT', () => {
    const result = parseInput('report');
    expect(result[0]).toBe('REPORT');
});
test('Entering in `PLACE 1,2,EAST` will parse to object without error', () => {
    const result = parseInput('PLACE 1,2,EAST');
    expect(result[0]).toBe('PLACE');
    expect(result[1].x).toBe(1);
    expect(result[1].y).toBe(2);
    expect(result[1].f).toBe('EAST');
});
test('Entering in `place 1,2,east` will parse to object without error and capitalize text', () => {
    const result = parseInput('PLACE 1,2,EAST');
    expect(result[0]).toBe('PLACE');
    expect(result[1].x).toBe(1);
    expect(result[1].y).toBe(2);
    expect(result[1].f).toBe('EAST');
});
test('Entering in invalid place command will return nothing: `place 1,` ', () => {
    const result = parseInput('PLACE 1,2,EAST');
    expect(result[0]).toBe('PLACE');
    expect(result[1].length).toBe(undefined);
});