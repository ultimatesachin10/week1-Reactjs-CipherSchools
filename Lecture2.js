// var myname = 'John';
// console.log(myname);
// myname = 5;
// console.log(myname);

// const myname1 = 'Sam';
// console.log(myname1);

// const myname2 = []
// console.log(myname2);
// myname2.push("John");
// console.log(myname2);

// let myname3 = 'John Wick';
// console.log(myname3);
// myname3 = "John Wick 4";
// console.log(myname3);

// {
//     var num = 5;
// }

// console.log(num);

// let firstname = 'Sachin';
// let lastname = 'Mishra';
// console.log(firstname + ' ' + lastname);

// Rest and Spread Operator
// Rest -> ...
// Spread -> ...
// They are used with JS Arrays and JS Objects

// Rest
// function addNumbers(...numbers) {
//   let sum = 0;
//   for (let number of numbers) {
//     sum += number;
//   }
//   return sum;
// }

// console.log(addNumbers(10, 20, 80, 44));
// console.log(addNumbers(10, 50));

// Spread is used with Arrays, Strings and with Objects
// Arrays

// let array = [5, 10, 15, 20, 25];
// let newArray = array;
// console.log(newArray);
let object = {
    name: "John",
    age: 24,
    address: {
      city: "New York",
      state: "NY",
      country: "USA",
    },
  };
  
  let object2 = JSON.parse(JSON.stringify(object));
  object2.address.city = "Newark";
  console.log(object2);
  
  
