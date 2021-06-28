//Filter range

function filterRange(arr, a, b) {

    //First variant
    let newArray = arr.slice(0);

    for (let item of newArray) {
        if (!(item <= a && item >= b)) {
            newArray.splice(newArray.indexOf(item), 1);
        }
    }

    return newArray;

    //Second variant
    /* arr.filter(item => (a <= item && item <= b));
    return arr; */
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (matching values)

alert( arr ); // 5,3,8,1 (not modified)