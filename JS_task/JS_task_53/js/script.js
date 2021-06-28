//The maximal salary

function topSalary(salaries) {
	let maxSalary = 0;
	let employeeName = null;

	for (let [name, salary] of Object.entries(salaries)) {
		if (maxSalary  < salary) {
			maxSalary  = salary;
			employeeName = name;
		}
	}

	return employeeName;
}

let salaries = {
	"John": 100,
	"Pete": 300,
	"Mary": 250
};

alert( topSalary(salaries) );