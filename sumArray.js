// Get Total Sum of Array

var sumArray = [55,67,99,77,33,11,6,44,2];
var totalSum = 0;

for (i = 0; i < sumArray.length; i++) {
    const sum = sumArray[i];
    totalSum += sum;
}

console.log(totalSum);


// by Function

function totalMarks(marks){
    let sumMarks = 0;
    
    for (let i = 0; i < marks.length; i++) {
        const element = marks[i];
        sumMarks += element; 
    }
    return sumMarks;
}

let studentMarks = [55,67,89,77,33,16,47,34,66,88,2];
let sumMarks = totalMarks(studentMarks)

console.log(sumMarks);




    var friend = ["Jamal","Kamal","Chamal","Namal","Hamal","Damal"];

    var allFriends = "";

    for (let i = 0; i < friend.length; i++) {
        const element = friend[i];
        allFriends = allFriends+element;
    }
    console.log(allFriends);

    function add(a, b){
        return a+b;
    }
    console.log(add("my"+"Name"));