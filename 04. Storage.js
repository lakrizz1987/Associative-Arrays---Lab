function storage(input) {
    let result = new Map();

    for (let line of input) {
        let [product, qty] = line.split(' ');
        qty = Number(qty);

        if (!result.has(product)) {
            result.set(product, qty);
        } else {
            let existing = result.get(product);
            result.set(product, qty + existing);
        }
    }

    for (let [product, qty] of result) {
        console.log(`${product} -> ${qty}`);
    }
}
storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'])