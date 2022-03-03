function solve(input) {
    let result = {};

    for (let line of input) {
        let [day, name] = line.split(' ');

        if(!result.hasOwnProperty(day)){
            result[day] = name;
            console.log(`Scheduled for ${day}`);
        }else{
            console.log(`Conflict on ${day}!`);
        }
    }
    for (let day in result) {
        console.log(`${day} -> ${result[day]}`);
    }
}

solve(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'])