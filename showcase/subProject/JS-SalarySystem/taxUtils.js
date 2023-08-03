// Object-oriented programming (OOP) using classes
class Employee {
    constructor(name, salary) {
      this.name = name;
      this.salary = salary;
    }
  
    getAnnualSalary() {
      return this.salary * 12;
    }
  
    static getBonusPercentage() {
      return 0.1;
    }
  }
  
  // Array manipulation using Array methods
  const employees = [
    new Employee("John Doe", 5000),
    new Employee("Jane Smith", 6000),
    new Employee("David Johnson", 7000)
  ];
  
  // Higher-order function and arrow function
  const totalAnnualSalary = employees.reduce((total, employee) => total + employee.getAnnualSalary(), 0);
  
  // Template literals and string interpolation
  console.log(`Total annual salary of all employees: ${totalAnnualSalary}`);
  
  // Asynchronous programming using Promises and async/await
  function simulateAsyncAPI() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Async operation completed");
      }, 2000);
    });
  }
  
  async function performAsyncTask() {
    console.log("Start");
    try {
      const result = await simulateAsyncAPI();
      console.log(result);
      console.log("End");
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  performAsyncTask();
  
  // Destructuring assignment
  const { name, salary } = employees[0];
  console.log(`First employee details: ${name}, ${salary}`);
  
  // Spread operator
  const employeeNames = employees.map(employee => employee.name);
  console.log("Employee names:", ...employeeNames);
  
  // Default parameters
  function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
  }
  
  greet();
  greet("John");
  
  // Modules using ES6 module syntax
  import { calculateTax } from './taxUtils.js';
  
  const taxAmount = calculateTax(totalAnnualSalary);
  console.log(`Tax amount: ${taxAmount}`);