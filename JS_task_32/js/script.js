//Check for spam

function checkSpam(str) {
    let newStr = str.toLowerCase();

    if (newStr.includes("viagra") || newStr.includes("xxx")) {
        return true;
    }

    return false;
}

alert( checkSpam('buy ViAgRA now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam("innocent rabbit") );
