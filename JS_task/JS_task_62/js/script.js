//Turn the object into JSON and back

let user = {
    name: "John Smith",
    age: 35
};

let json = JSON.stringify(user);

let obj = JSON.parse(json);