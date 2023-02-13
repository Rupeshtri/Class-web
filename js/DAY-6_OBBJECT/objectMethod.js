//  EXAMPLE
/* const userDetails = {
    firstName: "Rupesh" ,
    lastName: "Tripathi" ,
    age: 31 ,
    tel: "11-111-111" , 
};
console.log(userDetails);

//  EXAMPLE

const contryPrimeMinister = {
    nepal: "Prachanda" ,
    india: "Modi" ,
    usa:"Biden" ,

};
console.log(contryPrimeMinister.usa);
 */



//  EXAMPLE
/* const mobile = {
    name: "Iphone" ,
    price: "2,40,000" ,
    madeIn: "USA" ,

};
console.log(mobile.name);
 */
//  EXAMPLE

/* let person = {
    firstName: 'Rupesh' ,
    lastName: 'trip',
    address: 'bara',
    age: 20,
    gender: 'male',
    isMarried: true,

    fullName: function () {
        return this.firstName + " " + this.lastName + " is from " +  this.address + "  and  is "  + this.age + " years old";
    },
    messageToRupesh: function(){
        return this.isMarried ? " You are married" : " You are not married."
    },
    details: function(){
        return this.firstName + " is from " + this.address + ". " + " His fullname is " + this.firstName + this.lastName + ". " + " He is " + this.age + " years old and he is" + this.isMarried
    }
};

console.log(person.messageToRupesh());
console.log(person.fullName());
console.log(person.details());
 */

/* 
let  mobile = {
    color : "blue",
    price : "1500",
    brand : "Lenovo",
    os: "android"
};

console.log(mobile);
console.log(mobile.brand);
console.log(typeof mobile);
 */

let num = [1,33,46, 6, 8, 555, 55];
/* for(let i=0; i<num.length; i++){
    console.log(num[i])
} */
// for each loop
num.forEach((element) =>{
    console.log(element * element)
})
