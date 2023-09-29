export default function createIteratorObject(report) {
  let departmentNames = Object.keys(report.allEmployees);
  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;

  return {
    next() {
      if (currentDepartmentIndex >= departmentNames.length) {
        return { done: true };
      }

      const departmentName = departmentNames[currentDepartmentIndex];
      const employeesInDepartment = report.allEmployees[departmentName];

      if (currentEmployeeIndex >= employeesInDepartment.length) {
        currentDepartmentIndex++;
        currentEmployeeIndex = 0;
        return this.next(); // Skip empty departments
      }

      const currentEmployee = employeesInDepartment[currentEmployeeIndex];
      currentEmployeeIndex++;

      return { value: currentEmployee, done: false };
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}
