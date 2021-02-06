//Check the login
let userLogin = prompt("Enter your login", "");

if (userLogin == "Admin") {
    let userPassword = prompt("Enter your password", "");
    if (userPassword == "TheMaster")
    {
        alert("Welcome!");
    }
    else if (userPassword == null || userPassword == "") {
        alert("Canceled");
    }
    else {
        alert("Wrong password");
    }
}
else if (userLogin == null || userLogin == "") {
    alert("Canceled");
}
else {
    alert("I don’t know you");
}