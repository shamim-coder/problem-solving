// Get Largest Number in array

var number = [10,55,63,44,89,77,31,64];
var max = [0];

for (let i = 0; i < number.length; i++) {
    
    const num = number[i];

    if( num > max ) {
        max = num;
    }
}
console.log(max);

// Get largest number in arrays with Functions

function getLargeNum(number){
    var max = [0];

    for (let i = 0; i < number.length; i++) {
        
        const num = number[i];

        if( num > max ) {
            max = num;
        }
    }
    return max;
}
var allMarks = [10,55,63,44,89,77,31,64];
var topMark = getLargeNum([64,88,99,13,105,73,351])

console.log(topMark);