
let employees = [ {firstName: "Dipper", lastName: "Pines", role: "Boss"} , {firstName: "Bideri", lastName: "Alec", role: "Engineer"}];

function findEmployee(fullName){
  const [firstName , lastName] = fullName.split(' ');

  const employee = employees.find(
    (employee) => employee.firstName === firstName && employee.lastName === lastName
  );

  return employee ? employee.role : "Does not work here!"
}

console.log(findEmployee("Bideri Alec"));
