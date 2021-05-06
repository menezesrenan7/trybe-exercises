function integerMostRepeated(array) {
    let counter = 0;
    let repitedCounter = 0;
    let indexMostRepeated = 0;
 
    for (let index = 0; index < array.length; index += 1) {
        for (let index2 = 0; index2 < array.length; index2 += 1) {
            if (array[index2] === array[index]) {
                counter += 1
            }
        }
        if (counter > repitedCounter) {
            repitedCounter = counter;
            indexMostRepeated = index;
        }
        counter = 0;
    }
    return array[indexMostRepeated];
}

console.log(integerMostRepeated([2, 3, 2, 5, 8, 2, 3]));
