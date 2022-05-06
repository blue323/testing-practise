const calculator = require('../files/calculator');

test('calculator add function', () => {
    expect(calculator.add(1, 2)).toBe(3)
})

test('calculator subtract function', () => {
    expect(calculator.subtract(1, 2)).toBe(-1)
})

test('calculator divide function', () => {
    expect(calculator.divide(1, 2)).toBe(0.5)
})

test('calculator multiply function', () => {
    expect(calculator.multiply(1, 2)).toBe(2)
})