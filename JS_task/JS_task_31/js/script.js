//Uppercase the first character

function ucFirst(str) {
    if (!str) {
        return str;
    }

    str = str[0].toUpperCase() + str.slice(1);
    return str;
}

ucFirst("john") == "John";
