// PROBLEM-write a function that loops through an array of numbers and returns the sum of the numbers.

let sumOfArray = 0;

function array (n){
    for (let singleItem of n){
        sumOfArray += singleItem;
    }
    return sumOfArray
}
console.log(array([10,11,2,3,14,20]));


// PROBLEM-create an object with properties name and age.write a function to add a new property city to the object 

let person = {
    name : "Ananna",
    age : 22,

}

person.city = "Mymensingh"

console.log(person);


// PROBLEM-write a function that takes a number and returns whether it is even or odd 

function evenOrOdd(n){
    if(n % 2 === 0){
        console.log(n +" " + "is a even number");
    }

    else
    console.log(n +" " + "is a odd number");
        

}

console.log(evenOrOdd(11));


// PROBLEM- create an object that represents a car with properties brand and MediaSourceHandle. write a function to update the model of the car 

 let car = {
    brand : "Ferrari",
    MediaSourceHandle : "FERR456",
    model : "488 GTB",
 };

 console.log(car);
 

 function updateModel (newModel){
    car.model = newModel
 }

updateModel("F8 tributo");
console.log(car);


// PROBLEM- Write a function that loops through an object and prints each property and its value. 




function eachProperty(abc){
    for(let key in abc){
      console.log(key +": "+ abc[key])
    }
}

let person2={
    fName:"Tanjil",
    lName:"Ahmed",
    city:"Mymensingh",
    age:24
}

eachProperty(person2);