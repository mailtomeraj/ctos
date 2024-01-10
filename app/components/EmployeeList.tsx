'use client'
import { useEmpStore } from "@/store/employee";
import { useState } from "react";
import { GoPersonAdd } from "react-icons/go";
import Image from "next/image";
export const EmployeeList = () => {
const {employeeData,addEmployee,editEmployee,deleteEmployee}:any= useEmpStore();
const [profile,setProfile]= useState("")
const [name, setName]= useState("")
const [salary, setSalary] = useState("")
const [age, setAge] = useState("")
const [isEdit,setIsEdit] =useState(false)
const [employeeID, setEmployeeID] = useState(null)
const [visible, setVisible] = useState(false)
const [show, setShow] = useState(false)

const toggleForm = (e:React.MouseEvent<HTMLElement>) =>
{
  e.preventDefault()
  setVisible(!visible)
}
const handleAddEmployee = (e:React.MouseEvent<HTMLElement>) =>
{
   e.preventDefault()
  
   if(!name && !salary && !age) return;

   const newEmployee = {  
    id:Date.now(),    
    name,
    salary,
    age
   }
   addEmployee(newEmployee)
   setName("")
   setSalary("")
   setAge("")
}


const editAEmployee = (id:any) =>
{
  setVisible(true)
const emp = employeeData.filter((employee:any) => employee.id === id)[0];
setName(emp.name)
setSalary(emp.salary)
setAge(emp.age)
setEmployeeID(id);
setIsEdit(true)
}    
const viewEmployee = (id:any) =>
{
  setShow(true)
const emp = employeeData.filter((employee:any) => employee.id === id)[0];
setName(emp.name)
setSalary(emp.salary)
setAge(emp.age)
setEmployeeID(id);
setIsEdit(true)
}
const handleEditEmployee = (e:React.MouseEvent<HTMLElement>) =>
{
   e.preventDefault()
 
   if(!name && !salary && !age) return;

   const updatedEmployee = {
    id:employeeID,
    name,    
    salary,
    age
   }
   editEmployee(updatedEmployee.id, updatedEmployee)
   setName("")
   setSalary("")
   setAge("")
}
const handleDeleteEmployee = (employeeID:any) =>
{
  
      deleteEmployee(employeeID)

}

console.log(employeeData)
  return (
<div>  
<div className="flex justify-end w-full"><button 
onClick={toggleForm}
className=' bg-[#00dc6e] rounded-md py-2 px-5 font-semibold text-white flex gap-2  items-center text-base mb-6  '>Add Employee <GoPersonAdd className="text-2xl font-semibold"  /></button>
</div>
  {visible ?
<form className="max-w-lg py-10">
    <div className="mb-5">
      <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
      <input type="text" id="name" 
      value={name}
      onChange={(e)=>setName(e.target.value)}
      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="" required/>
    </div>
    <div className="mb-5">
      <label htmlFor="salary" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Salary</label>
      <input type="number" min="0" id="salary" 
      value={salary}
       onChange={(e)=>setSalary(e.target.value)}
      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required/>
    </div>
    <div className="mb-5">
      <label htmlFor="age" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age</label>
      <input type="text" id="age" 
       value={age}
        onChange={(e)=>setAge(e.target.value)}
      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required/>
    </div>
    <div className="mb-5">
      <label htmlFor="profile" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Profile Pic</label>
      <input type="text" id="profile" 
      //  value={profile}
        onChange={(e)=>setProfile(e.target.value)}
      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Profile URL" required/>
    </div>
    <button onClick={isEdit ? handleEditEmployee : handleAddEmployee} type="submit" className="text-white bg-[#00dc82] hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-base px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{isEdit ? "Edit Employee" : "Add Employee"}</button>
  </form> : <></>
}
{show ?
<form className="max-w-lg py-10">
  <h2 className=" text-3xl text-bold mb-8">Employee Details</h2>
  <div className="mb-5 flex gap-10 items-end">
      <label htmlFor="name" className="block  text-sm font-medium text-gray-900 dark:text-white">Profile:</label>
      
      <Image className="w-10 h-10 rounded-full" src={employeeData.img ?? "/images/user-default.png" } width={50} height={50} alt="user profile"/>
      </div>
    <div className="mb-5 flex gap-10 items-end">
      <label htmlFor="name" className="block  text-sm font-medium text-gray-900 dark:text-white">Name :</label>
      
      {name}    
      </div>
      <div className="mb-5 flex gap-10 items-end">
      <label htmlFor="name" className="block  text-sm font-medium text-gray-900 dark:text-white">Salary :</label>
      
      {salary}    
      </div>
      <div className="mb-5 flex gap-10 items-end">
      <label htmlFor="name" className="block  text-sm font-medium text-gray-900 dark:text-white">Age :</label>
      
      {age}    
      </div>
    
    </form> : <></>
}
<div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-black uppercase bg-gray-100 dark:bg-gray-200 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                Name
                </th>
                <th scope="col" className="px-6 py-3">
                 Salary
                </th>
                <th scope="col" className="px-6 py-3">
                   Age
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                    Action
                </th>
            </tr>
        </thead>
      <tbody>
            {employeeData.map((emp:any, index:any) => (
        // <li key={index}>{emp.name}</li>
   
        <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <span className=" inline-flex gap-5 justify-center items-center">
            <Image className="w-10 h-10 rounded-full" src={emp.img ?? "/images/user-default.png" } width={50} height={50} alt="user profile"/>
            <span className="truncate w-[178px]">{emp.name.slice(0,25)}</span></span>
            </th>
            <td className="px-6 py-4">
            {emp.salary}
            </td>
            <td className="px-6 py-4">
            {emp.age}
            </td>
            <td className="px-6 py-4 text-center w-1/4">
            <span className="flex justify-center gap-5">
              <button  onClick={()=>viewEmployee(emp.id)} className="border border-green-400 rounded-3xl py-1 px-5 font-semibold text-sm text-green-400 hover:bg-green-100">View</button> 
              <button onClick={()=>editAEmployee(emp.id)} className="border border-green-400 rounded-3xl py-1 px-5 font-semibold text-green-400 hover:bg-green-100">Edit</button> 
              <button onClick={()=>handleDeleteEmployee(emp.id)} className="border border-red-400 rounded-3xl py-1 px-5 font-semibold text-red-400 hover:bg-red-50">Delete </button> </span>
            </td>
        </tr>
        
      ))}
   
   </tbody>
    </table>
</div>
     </div>
  )
}
