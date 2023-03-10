function people() {

    class Employee {
        constructor(name,age) {
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = [];
        };
        work() {

        };
        collectSalary() {

        };
    }

    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.salary = 0;
            this.tasks = [" is working on a simple task."];
        };
        work () {
            console.log(this.name + this.tasks[0]);
        };
        collectSalary () {
            console.log(`${this.name} received ${this.salary} this month.`);
        };
    }

    class Senior extends Employee {
        constructor(name, age){
            super(name, age);
            this.salary = 0;
            this.tasks = [" is working on a complicated task.",
            " is taking time off work.",
            " is supervising junior workers."];
        };
        work () {
           let task = this.tasks.shift();
           console.log(this.name + task);
           this.tasks.push(task)
           
        };
        collectSalary () {
            console.log(`${this.name} received ${this.salary} this month.`);
        };
    }

    class Manager extends Employee {
        constructor(name, age){
            super(name,age);
            this.salary = 0;
            this.tasks = [" scheduled a meeting.",
            " is preparing a quarterly report."];
            this.dividend = 0;
        };
        work () {
            let task = this.tasks.shift();
            console.log(this.name + task);
            this.tasks.push(task)
        };
        collectSalary () {
            console.log(`${this.name} received ${this.salary + this.dividend} this month.`);
        }
    }

    return {Employee, Junior, Senior, Manager}
}
const classes = people (); 
const junior = new classes.Junior('Ivan',25); 
 
junior.work();  
junior.work();  
 
junior.salary = 5811; 
junior.collectSalary();

const senior = new classes.Senior('Alex', 31); 
 
senior.work();  
senior.work();  
senior.work();  
senior.work();  
 
senior.salary = 12050; 
senior.collectSalary();  

const manager = new classes.Manager('Tom', 55); 
 
manager.salary = 15000; 
manager.collectSalary();  
manager.dividend = 2500; 
manager.collectSalary();
