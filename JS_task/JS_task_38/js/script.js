//Translate border-left-width to borderLeftWidth
function camelize(str) {
    let array = str.split("-");

    for (let item of array) {
        if (item == "") array.splice(array.indexOf(""), 1);
    }

    let newArray = array.map((item, index) => index == 0 ? item : item[0].toUpperCase() + item.slice(1));

    return newArray.join('');
}

alert( camelize("background-color") );
alert( camelize("list-style-image") );
alert( camelize("-webkit-transition") );