function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   let result = [];

   function onClick () {
      
      let inputText = JSON.parse(document.querySelector('#inputs textarea').value);
      let bestRestaurantParagraph = document.querySelector("#bestRestaurant p");
      let bestRestaurantStaffParagraph = document.querySelector("#workers p");
      for (let item of inputText) {
         
         let [name, staffList] = item.split(' - ');
         if (!result.find(e => e.name === name)) {
            result.push({
               name,
               averageSalary: 0,
               bestSalary: 0,
               sumSalary: 0,
               staffList: []
            });
         }
         let currentRestaurant = result.find(e => e.name === name);
         staffList = staffList && staffList.split(', ');
         for (let currentWorker of staffList) {
            update(currentRestaurant, currentWorker)
         }
      }
      let bestRestaurant = result.sort((a,b) => b.averageSalary - a.averageSalary)[0];

      bestRestaurantParagraph.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.averageSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`

      let sortListOfWorkers = bestRestaurant.staffList.sort((a,b) => b.salary - a.salary);
      let buff = '';
      for (let worker of sortListOfWorkers) {
         buff += `Name: ${worker.name} With Salary: ${worker.salary} `
      }
      bestRestaurantStaffParagraph.textContent += buff
   }

   function update(obj, worker) {
      let [name, salary] = worker.split(' ');
      salary = Number(salary);
      obj.sumSalary += salary;
      if(obj.bestSalary < salary) {
         obj.bestSalary = salary;
      }
      obj.staffList.push({
         name,
         salary
      });
      obj.averageSalary = obj.sumSalary / obj.staffList.length;
   }

}
