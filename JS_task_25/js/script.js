//Create new Calculator

function Calculator(){
  this.read = function() {
    this.val1 = +prompt("Enter value 1","");
    this.val2 = +prompt("Enter value 2","");
  }

  this.sum = function() {
    return this.val1 + this.val2;
  }

  this.mul = function() {
    return this.val1 * this.val2;
  }
}


let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

