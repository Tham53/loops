//repeat 'Hello World' 5 times

for (let i = 1; i <=5; i++){
    console.log ('Hello World', i)
}

// 1. Use a do...while loop to console.log the numbers from 1 to 1000.
// counter.js
let counter = 1;
while (counter <= 1000) {
  console.log(counter);
  counter = counter + 1;
}
// 2. Create an object (an array with keys and values) called person with the following data:
// firstName: "Jane"
// lastName: "Doe"
// birthDate: "Jan 5, 1925"
// gender: "female"
let persons = {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female", 
    };
// 3. Use a for...in loop and if statement to console.log the value associated with the key birthD
function PersonProps() {
    this.birthDate = 'Jan 5, 1925';
  }
  
  const obj = new PersonProps();
  for (const prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      console.log(`obj.${prop} = ${obj[prop]}`);
    } 
  }
// 4. Create an arrayOfPersons that contains multiple objects. You can simply copy/paste the perso
arrayOfPersons: [
    {
        name: "John",
        gender: "male",
        birthday: "Jan 5, 1996"
    },

    {
        name: "Alex",
        gender: "female",
        birthday: "Jan 4, 1996"
    },


    {
        name: "Bob",
        gender: "male",
        birthday: "Jan 3, 1988"
    },

    {
        name: "Daisy",
        gender: "female",
        birthday: "Jan 2, 1980"
    }
]
// 5. Use .map() to map over the arrayOfPersons and console.log() their information.
var info = arrayofPersons.map(function(a) {
  return {name: a.name, gender: a.gender, birthday: a.birthday};
  })
      console.log(info);
// 6. Use .filter() to filter the persons array and console.log only males in the array.
var males = arrayofPersons.filter(men => {
  return men.gender === 'male';
})

console.log(males);
// 7. Use .filter() to filter the persons array and console.log only people that were born before 
var startDate = new Date("Jan 1, 1980");
var endDate = new Date("Jan 1, 1990");

var older = arrayofPersons.filter(a => {
  var date = new Date(a.birthday);
  return (date >= startDate && date <= endDate);
});
console.log(older)
