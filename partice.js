//  problem no 6

const numbers = [ 2,3,4,5,6,7,8,9];

const result = numbers.map(odd => odd*2);
console.log(result);

//  problem no 7

const product =  [

    { name: "opu", id: 5000},
    { name: "hridoy", id:4000},
    { name: "akhi", id: 5000}
]

const id = product.filter(ids => ids.id == 5000)
console.log(id);
//  distructing object

const member = {

    bigman:{ name:"shimu",age:45,
    },
    smallman:{ andsmallman:{name:"azim",ages: 5}}
}
const {name,ages} = member?.smallma?.andsmallman
console.log(name,ages)
//  array distructing

const number = [ 1,2,4,4,5,6];

const [ , , number3] = number;

const three = number3;
console.log(three);

// problem number 10

const para3 = (x,y,z=7) => x*y*z;

console.log(para3(10,10));