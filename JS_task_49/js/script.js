//Filter unique array members

function unique(arr) {
    let uniSet = new Set(arr);

    return Array.from(uniSet);
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) ); // Hare, Krishna, :-O