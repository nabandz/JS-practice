//Output a single-linked list in the reverse order

function printReverseList(list) {
    //First variant
    /* let arr = [];
    let element = list;

    while (element) {
        arr.push(element.value);
        element = element.next;
    }

	arr.reverse();
    for (let value of arr) {
		alert(value);
	} */

    //Second variant
    if (list.next) {
    	printReverseList(list.next);
    }
  
    alert(list.value);
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

alert( printReverseList(list) );