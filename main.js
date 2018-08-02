const users = [
  {
    id: 1,
    firstname: "Jeanette",
    lastname: "Penddreth",
    age: 21,
    email: "jpenddreth0@census.gov",
    gender: "Female"
  },
  {
    id: 2,
    firstname: "Giavani",
    lastname: "Frediani",
    age: 42,
    email: "gfrediani1@senate.gov",
    gender: "Male"
  },
  {
    id: 3,
    firstname: "Noell",
    lastname: "Bea",
    age: 35,
    email: "nbea2@imageshack.us",
    gender: "Female"
  },
  {
    id: 4,
    firstname: "Willard",
    lastname: "Valek",
    age: 46,
    email: "wvalek3@vk.com",
    gender: "Male"
}];

// 1. Select the first and last person
// console.log(users);
// console.log(users[0]);
// console.log(users [users.length -1]);
// 2. Add yourself to the end of the array (using id: 5)
let me = {
  age: 23,
  email: "chreol@tri.com",
  firstname: "Chreol",
  gender: "Male",
  id: 5,
  lastname: "Tri"
};
console.log(me);
users.push(me);
// console.log(users);
// // 3. Remove the user in index 2 from the array
// users.splice(1,1);
// // console.log(users.split(2,1));
// console.log(users);

// // 4. Log all array users ids, firstnames and lastnames ex. 1. Jeanette Penddreth
//  for (i=0; i< users.length; i++){
//    console.log (users[i].id, users[i].firstname, users[i].lastname);
//  };

// 5. Create an array that contains only the firstname, lastname and email of each user
// nArr = arr.map(function(cv, i, arg){},this);
// nArr = arr.map(function(cv){});
// nArr = arr.map(f=>{});

// let arr = [2,3,4];
// let myArr = arr.map(x => x*2);
// // console.log(myArr);
// // console.log(arr);

// var myUsers = users.map(obj => {
//   var myObj = obj.firstname + " " + obj.lastname + " => " + obj.email;
//   return myObj;
// });
// console.log(myUsers);

// 6. Find the average age of our users array
// sum of age/ sum of each user will give us average age. so here we gona use math
console.log(users);
// let create and array with list of age
let myusersage = users.map(obj => {
  let myobj = obj.age;
  return myobj;
});
console.log(myusersage);

let reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(myusersage.reduce(reducer));
let reduceage = myusersage.reduce(reducer);
let avg = (reduceage / myusersage.length);
console.log(avg);


// 7. Create an array that contains only the users who are 35 years old and less

function filterAge(x){
  return x <= 35 ;
}
let filterage = myusersage.filter(filterAge);

console.log(filterage);
// 8. Select the user with id 4
console.log(users[3]);
