//Output a single-linked list

function printList(list) {
    //First variant
    /* let element = list;

    while (element) {
        alert(element.value);
        element = element.next;
    } */

    //Second variant
    alert(list.value);

    if (list.next) {
        printList(list.next);
    }
}

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
};

alert( printList(list) );