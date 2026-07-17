function Employee(name, salary, department) {
    this.name = name;
    this.salary = salary;
    this.department = department;
}

Employee.prototype.getDetails = function () {
    const { name, salary, department } = this;
    console.log(`Name : ${name}`);
    console.log(`Department : ${department}`);
    console.log(`Salary : ${salary}`);
}

Employee.prototype.increaseSalary = function (percent = 0) {
    ;
    const increment = (percent / 100) * this.salary;
    this.salary += increment
    return this.salary
}

const emp1 = new Employee("Venkat", 50000, 'Development')