function addressBook(input) {
    let result = {};

    for (let line of input) {
        let [name, address] = line.split(':');
        result[name] = address;
    }

    let sortedKeys = Object.keys(result).sort((a, b) => a.localeCompare(b));
    sortedKeys.forEach(name => console.log(`${name} -> ${result[name]}`));
}

addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'])