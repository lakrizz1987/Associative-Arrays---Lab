function schoolGrades(input) {
    let result = {};

    for (let line of input) {
        let array = line.split(' ');
        let name = array.shift();
        array = array.map(Number);

        if (!result.hasOwnProperty(name)) {
            result[name] = array;
        } else {
            for (let mark of array) {
                result[name].push(Number(mark));
            }
        }
    }

    let sortedNames = Object.keys(result).sort((a, b) => a.localeCompare(b));

    for (let student of sortedNames) {
        let totalMarks = result[student].reduce((a, b) => {
            let sum = a + b;
            return sum;
        });
        let average = totalMarks / result[student].length;
        console.log(`${student}: ${average.toFixed(2)}`);
    }
}
schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'])