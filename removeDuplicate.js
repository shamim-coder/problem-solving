
function newFunction(pushList) {
    let uniqList = [];
    let lan = pushList.length;

    for (let i = 0; i < lan; i++) {

        if (uniqList.indexOf(pushList[i]) === -1) {
            uniqList.push(pushList[i]);
        }
    }
    return uniqList;
}


// Declear Function

let studerntList = ["Jamal", "Kamal", "Korim", "Jamal", "Shofiq", "Kamal", "Fahim", "Jamal"];
let uniqList = newFunction(studerntList);
console.log(uniqList);



var number = [10,55,33,4,66,87,55,9,10,66,46,44,55,75,21,22,33,44,10,5];
let dupNum = newFunction(number);
console.log(dupNum);
