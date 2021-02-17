//Truncate the text

function truncate(str, maxlength) {
    if (str.length > maxlength) {
        let newStr = str.slice(0, maxlength - 1) + "...";
        return newStr;
    }

    return str;
}

truncate("What I'd like to tell on this topic is:", 20); //"What I'd like to te…"
truncate("Hi everyone!", 20); //"Hi everyone!"