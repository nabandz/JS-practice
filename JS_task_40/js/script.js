//Filter range "in place"

function filterRangeInPlace(arr, a, b) {
    for (let item of arr) {
        if (!(item <= a && item >= b)) {
            arr.splice(arr.indexOf(item), 1);
        }
    }
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4);

alert(arr);