function animalCalculator(depth) {
    let animal = 0;

    if (depth <= 10) {
        animal = depth * 50;
    }
    else if (depth <= 20) {
        let firstPart = 10 * 50;
        let remine = (depth - 10) * 100;
        animal = firstPart + remine;
    }
    else {
        let firstPart = 10 * 50;
        let secondPart = firstPart + (10 * 100);
        let remine = (depth - 20) * 300;
        animal = secondPart + remine;
    }
    return animal;
}

let result = animalCalculator(22);
console.log(result);