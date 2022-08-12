// Write your solution in this file!
const employee = {
    
        name : 'diana',
        streetAddress : 22
    
}

employee.name = 'kevin'

console.log (employee.name)


function updateEmployeeWithKeyAndValue(employee, key, value){
   const newObj = {...employee};
   newObj[key]= value;
   return newObj

}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value; //Why are we using bracket notation here?
  
    return obj;
  }

function deleteFromEmployeeByKey(obj, key){
  let newobj = {
    'name': 'diana',
    'Address': '42',
    
  };
}
  delete newObj.name;
 console.log (employee)
  
  


       

