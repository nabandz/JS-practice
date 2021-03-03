//Format the relative date

function formatDate(date) {
    let timePassed = new Date() - date;

    if (timePassed < 1000) {
        return 'right now';
    }
    
    let sec = Math.round(timePassed / 1000);
    if (sec < 60) {
        return sec + ' sec. ago';
    }

    let min = Math.round(sec / 60);
    if (min < 60) {
        return min + ' min. ago';
    }

    let year = date.getFullYear();
    year = year.toString().slice(-2);

    let month = date.getMonth() + 1;
    month = month < 10 ? '0' + month : month;

    let day = date.getDate();
    day = day < 10 ? '0' + day : day;

    let hour = date.getHours();
    hour = hour < 10 ? '0' + hour : hour;

    let minutes = date.getMinutes();
    minutes = minutes < 10 ? '0' + minutes : minutes;
    
    return `${day}.${month}.${year} ${hour}:${minutes}`;
}

alert( formatDate(new Date(new Date - 1)) ); // "right now"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 sec. ago"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 min. ago"

// yesterday's date like 31.12.16 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) );