const capitalize = require('../files/capitalize');

test('capitalize a string: cat to be Cat', () => {
    expect(capitalize("cat")).toBe("Cat")
})