//Show a weekday

function getWeekDay(date) {
    let week = null;

    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
    week = days[date.getDay()];

    return week;
}

let date = new Date(2012, 0, 3);  // 3 Jan 2012
alert( getWeekDay(date) );        // should output "TU"