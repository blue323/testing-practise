const caesarCipher = require('../files/caesarCipher');

test('caesar cipher: test abc expect bcd', () => {
    expect(caesarCipher("abc", 1)).toBe("bcd")
})

test('caesar cipher: test hello! expect khoor!', () => {
    expect(caesarCipher("hello!", 3)).toBe("khoor!")
})