const employee = [
  { id: '1', name: 'Mohamed Sayed' },
];
 
exports.getEmployees = async (req, res, next) => {
  res.status(200).json({ data: employee });
};

// TODO
exports.deleteEmployee = async (req, res, next) => {
  let id = req.params.id; 
  if(!id){
    res.status(404).json({message:"No ID sent"})
  }
  for(let x in employee){
    if(employee[x].id == id){
      employee.splice(x, 1);
      break;
    }
  }
  res.status(200).json({ message: 'Employee deleted successfully' });
};
// TODO
exports.createEmployee = async (req, res, next) => {
  const id = req.body.id;
  if(!id){
    res.status(404).json({message:"No ID sent"})
    return;
  }
  const name = req.body.name;
  if(!name){
    res.status(404).json({message:"No Name sent"})
    return;
  }
  for(let x in employee){
    if(employee[x].id == id ){
      res.status(409).json({ message: 'ID must be unique' });
      return;
    }
  }
  employee.push({ id: id.toString(), name: name });
  res.status(200).json({message:"User added successfully"});
  
};
