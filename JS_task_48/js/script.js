//Filter unique array members

function unique(arr) {
    let uniArray = [];

    for (let word of arr) {
        if (!uniArray.includes(word)) {
            uniArray.push(word);
        }
    }

    return uniArray;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); // Hare, Krishna, :-O