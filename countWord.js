let words = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard i dummy";

let getI = 0;

for (let i = 0; i < words.length; i++) {
    let element = words[i];
    if ( element == " " &&  words[i-1] != " ") {
        getI++;
    }
}
console.log(getI);

