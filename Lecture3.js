// .map() -- It will give a new array based on the existing array if you provide the computational logic

// let array =  [1,2,3,4,5];
// let newArray = [];
// for (let i =0; i < array.length; i++) {
//     newArray [i] = array[i] * array[i];
// }
// console.log(newArray);

let array =  [1,2,3,4,5];

function functionForMap(element) { //element = array[i]
    return element*element;
}

let newArray = array.map(functionForMap);
console.log(newArray);

// in JS, a function is also a JS Object

// .forEach(()

let array1 = [1,2,3,4,5];
array1.forEach((element, index) => {
    element *= element;
    console.log(element);
});

console.log("Array is : ", array1);

// .filter() 

let array2 = [10,20,30,40,50];
let newArray1 = array2.filter((element) => element >= 30);
console.log(newArray1);


// .find()
let array3 = [10,20,30,40,50,60];
let temp = array3.find((value) => {
    return value > 20;
});
console.log(temp);

// .sort()

let array4 = [100,56,151,61,6,12];
let sortedArray = array.sort();
console.log(sortedArray);

let arr=[40,50,30,100,20,60];
let sortArray=arr.sort((el1,el2)=>{el1=Number(el1);
    el2=Number(el2);
    return el2-el1;
});
console.log(sortArray);

// class Animal {
//   noOfLegs;
//   color;
//   family;
//   sound;

//   constructor(noOfLegs, color, family, sound) {
//     this.noOfLegs = noOfLegs;
//     this.color = color;
//     this.family = family;
//     this.sound = sound;
//   }

//   showAnimal() {
//     console.log(`The family of the animal is: ${this.family}`);
//   }
// }

// // let animal = new Animal(4, "brown", "rodent", "phew phew");
// // console.log(animal.noOfLegs);

// class Dog extends Animal {
//   breed;
//   weight;
//   height;
//   hasTail;

//   constructor(breed, weight, height, hasTail, color) {
//     super();
//     super.noOfLegs = 4;
//     super.sound = "Woof!";
//     super.family = "Loyal Animal";
//     super.color = color;
//     this.breed = breed;
//     this.weight = weight;
//     this.height = height;
//     this.hasTail = hasTail;
//   }
// }

// let dog = new Dog("Corgi", "30kgs", "0.5m", true, "Brown");
// // console.log(dog);
// dog.showAnimal()

let details = {
    name: "John",
    age: 24,
    address: {
      city: "New York",
      state: "NY",
      country: "USA",
      passportDetails: {
        passportNumber: "ABCD1234",
      },
    },
  };
  
  // let passportNumber = details.address.passportDetails.passportNumber;
  // let age = details.age;
  // let country = details.address.country;
  // let myCity = details.address.city;
  
  let {
    age,
    address: {
      city: myCity,
      country,
      passportDetails: { passportNumber },
    },
  } = details;
  
  console.log(age, myCity, country, passportNumber);