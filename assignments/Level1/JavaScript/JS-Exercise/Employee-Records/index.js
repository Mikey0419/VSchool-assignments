const employees = [];

function Employee(strName, strTitle, intSalary, strStatus) {
    // do something
    this.name = strName;
    this.title = strTitle;
    this.salary = intSalary;
    this.status = (strStatus === undefined) ? "Full Time" : strStatus;
}

Employee.prototype.printEmployee = function() {
    console.log("\n|Name:", this.name, "\n|Title:", this.title, "\n|Salary:", this.salary, "\n|Status:", this.status, "\n");
}

employees[0] = new Employee("Mikey", "Student", 900);
employees[1] = new Employee("Dave", "UX/UI", 10000);
employees[2] = new Employee("Kelly", "Instructor", 30000);
employees[3] = new Employee("Xavier", "Consultant", 15000, "Contract");

for (var i = 0; i < employees.length; i++) {
    employees[i].printEmployee();
}