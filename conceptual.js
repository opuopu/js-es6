// arrow function


let mostanHala = (fname,lname) =>{

    return fname + lname;


}
let the = mostanHala("amar name"," hamid")
console.log(the);


//  spread oparetor

const numbers = [ 5,6,7,8,6,66,45,56,757,55,3];


const theAnswer = {...numbers}
console.log(theAnswer);



// object on array

const names = [
    { name:"opu",id:30},
    { name: "shimul",id:25},

];
const { name1} = names[0];

console.log(name1);


let [greeting,...intro] = ["Hello", "I" , "am", "Sarah"];

console.log(greeting);//"Hello"
console.log(intro)



// https://www.freecodecamp.org/news/array-and-object-destructuring-in-javascript/

