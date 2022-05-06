function arrayAnalysis(array) {
    let average = 0
    let max = 0
    let min = array[0]
    for (let number of array) {
        if(number < min) {
            min = number
        }
        if(number > max) {
            max = number
        }
        average += number
    }
    average = average / array.length

    return {
        average: average,
        min: min,
        max: max,
        length: array.length
    }
}

module.exports = arrayAnalysis;