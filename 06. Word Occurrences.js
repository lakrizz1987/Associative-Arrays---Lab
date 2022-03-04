function solve(input) {
    let result = {};

    let word = input.shift();
    while (true) {
        if (!result.hasOwnProperty(word)) {
            result[word] = 1;
        } else {
            result[word] = result[word] + 1;
        }
        if (input.length === 0) {
            break;
        }

        word = input.shift();

    }

    let sorted = Object.entries(result).sort((a, b) => b[1] - a[1])

    for (let [word, count] of sorted) {
        console.log(`${word} -> ${count} times`)
    }
}
solve(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence",
    "And", "finally", "the", "third", "sentence"])