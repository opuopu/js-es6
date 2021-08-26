const arrays = [ 5,6,7,8,90,];


const sum = (numbers) =>{
    return numbers * 3;
};

// .map mane array er sob element aceess kora..like for loop
const last = arrays.map(sum);
console.log(last);


const square = [ 2,4,6,8,10];
//  map er bitor function  likhte hole direct parameter theke start korte hobe..
const isResult = square.map( x => x*x)
console.log(isResult);



const names = [ "akhi","opu","sohel"]

const length = names.map(x => x.length + 5);
// console.log(length);

