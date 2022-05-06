const reverseString = require('../files/reverseString');

test('reverse a string: cat to be Cat', () => {
    expect(reverseString("cat")).toBe("tac")
})

test('reverse a string: hello to be olleh', () => {
    expect(reverseString("hello")).toBe("olleh")
})