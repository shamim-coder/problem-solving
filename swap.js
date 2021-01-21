var afsan = "First";
var samira = "Second";
console.log("Before Exam Samira Result is " + samira + " Afsan Result is " + afsan);

// [afsan, samira] = [samira, afsan]; 

var templMark = afsan;
afsan = samira;
samira = templMark;

console.log("Before Exam Samira Result is " + samira + " Afsan Result is " + afsan);

// Another way to swap
var a = 15;
var b = 25;
console.log("a = " + a + " b = " + b);
a = a+b;
b = a - b;
a = a - b;
console.log("a = " + a + " b = " + b);

// javascript system for swap
var a = 50;
var b = 25;

[a , b] = [b , a];

console.log("a = " + a + " b = " + b);