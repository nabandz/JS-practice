//Create a calculator

let calculator = {
  read() {
    this.val1 = +prompt("Enter value 1","");
    this.val2 = +prompt("Enter value 2","");
  },

  sum() {
    return this.val1 + this.val2;
  },

  mul() {
    return this.val1 * this.val2;
  },
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );