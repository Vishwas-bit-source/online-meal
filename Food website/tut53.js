console.log("this is tutorial 53");

function greet(name,greetText){
    console.log(greetText + " " + name);
    console.log(name + " is a good boy")
}

function sum(a,b,c){
    let d = a+b+c;
    return d;
}
let name = "Vishwas";
let name1 = "Shubham"
let name2 = "Rohan";
let name3 = "Sagar";
greetText = "Good Morning";

greet(name,greetText);
greet(name1,greetText);
greet(name2,greetText);
greet(name3,greetText);

let returnVal = sum(1,2,3);
console.log(returnVal)


// console.log(name + " is a good boy");
// console.log(name1 + " is a good boy");
// console.log(name2 + " is a good boy");
// console.log(name3 + " is a good boy");
