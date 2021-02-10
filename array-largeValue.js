
function megaFriend(friends){
    let largeName = [];

    if (friends == null) {
        return "Input Your Friends Collection";
    }
    else if (Array.isArray(friends) == false) {
        return "Its not an Array";
    }
    else {
        for (let i = 0; i < friends.length; i++) {
        
            const friendsElement = friends[i];
           
            if (friendsElement.length > largeName.length) {
                largeName = friendsElement;
            } else if (Number.isInteger(friends[i]) == true) {
                return "hkfkdsf";
            }
        }
        return largeName;
    }
    
}

// let friendlist = ["Shamim", "Prihas", 5, "Abdul", "Torikul", "Arafat"];
// let result = megaFriend(friendlist);
// console.log(result);


// 1, 1 , 2, 3, 5, 8, 13, 21, 34, 55, 89, 154

function getFibo(num) {
    let dFibo = [0, 1];

    for (let i = 2; i < num; i++) {
        dFibo.push( dFibo[i-1] + dFibo[i-2] );
    }
    return dFibo;
    
}

// let result = getFibo(10);
// console.log(result);

// 1, 1 , 2, 3, 5, 8, 13, 21, 34, 55, 89, 154

function fiboRec(num){
    // Stoping Condition
    if(num == 0) {
        return [1];
    }
    if(num == 1) {
        return [1, 1];
    }
    
    let fibo = fiboRec(num-1);
    let nextFibo = fibo[num-1] + fibo[num-2];
    fibo.push(nextFibo);
    return fibo;
    

}
let result = fiboRec(5);
console.log(result);



// 5! = 1*2*3*4*5
function newFunction(fact) {
    let res = 1;

    for (let i = 1; i <= fact; i++) {
        res = res * i;
    }
    return res;
}
var facresult = newFunction(5);
console.log(facresult);


let b=[2,234,2354,235]
let a=[...b,'zisan','asik','sobuj','rohim','korim']
console.log(a)
