let num = [1,2,3,34,4];
let b = num.toString();  //b is now string.
console.log(b);
console.log(typeof b);

let c = num.join(" - ");
console.log(c , typeof c);

let r = num.pop(); // pop() removes the last element from the array.
console.log(num); 
console.log(r); // console.log(num, r);