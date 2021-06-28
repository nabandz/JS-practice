//How many seconds till tomorrow?

function getSecondsToTomorrow() {
    let today = new Date();

    let dayTime = 86400;
    let todayTime = today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds();

    return dayTime - todayTime;
}

alert( getSecondsToTomorrow() );