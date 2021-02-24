//Get average age

function getAverageAge(users) {
    let value = users.reduce((sum, user) => sum + user.age, 0) / users.length;
    return value;
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28