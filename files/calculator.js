let calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    divide: (a, b) => b === 0 ? "Infinity" : a / b,
    multiply: (a, b) => a * b
}

module.exports = calculator;