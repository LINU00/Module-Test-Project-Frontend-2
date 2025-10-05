let employees=[]
let id=1
const nameInput=document.getElementById("name")
const professionInput=document.getElementById("profession")
const ageInput=document.getElementById("age")
const msg=document.getElementById("msg")
const list=document.getElementById("employeeList")
document.getElementById("addBtn").addEventListener("click",()=>{
  const name=nameInput.value.trim()
  const profession=professionInput.value.trim()
  const age=ageInput.value.trim()
  if(name===""||profession===""||age===""){
    msg.textContent="Error : Please Make sure All the fields are filled before adding in an employee !"
    msg.className="message error"
    return
  }
  employees.push({id:id++,name,profession,age})
  msg.textContent="Success : Employee Added!"
  msg.className="message success"
  nameInput.value=""
  professionInput.value=""
  ageInput.value=""
  renderEmployees()
})
function renderEmployees(){
  if(employees.length===0){
    list.innerHTML="<p>You have 0 Employees.</p>"
    return
  }
  list.innerHTML=""
  employees.forEach(emp=>{
    const div=document.createElement("div")
    div.className="employee"
    div.innerHTML=`<div class="employee-info">${emp.id}. &nbsp; Name : ${emp.name} &nbsp;&nbsp; Profession : ${emp.profession} &nbsp;&nbsp; Age : ${emp.age}</div><button class="delete-btn" onclick="deleteEmployee(${emp.id})">Delete User</button>`
    list.appendChild(div)
  })
}
function deleteEmployee(empId){
  employees=employees.filter(e=>e.id!==empId)
  renderEmployees()
}
