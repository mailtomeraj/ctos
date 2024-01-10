
import {create} from "zustand"
import { persist, createJSONStorage } from 'zustand/middleware'
export const useEmpStore = create(
  persist(
  (set:any) =>({
    employeeData:[
        {
          id:1,         
          name:"Alexender de Marwe Marcushonwanahai",
          img:"https://placebear.com/g/200/200",
           salary:22000,
          age:40
        },
        {
            id:2,
            img:"https://placebear.com/g/200/200",
         
            name:"Mike",
            salary:32000,
            age:39
          },
          {
            id:3,
            img:"https://placebear.com/g/200/200",         
            name:"John",
            salary:72000,
            age:36
          },
    ],
    addEmployee:(newEmployee:any) => {
        set((state:any) => {
            return {employeeData:[...state.employeeData, newEmployee]}
        })
    },
    editEmployee:(id:any, updateEmployee:any) =>{
      set((state:any) => {
        const updatedEmployees = state.employeeData.map((employee:any) => {

          if (employee.id === id)
          {
            return {...employee, ...updateEmployee}
          }
               return employee
        })
        return {employeeData:updatedEmployees}
    })
    },

    deleteEmployee:(id:any) =>{
      set((state:any) => {
        const updatedEmployees = state.employeeData.filter((employee:any) => employee.id !==id)
        return {employeeData:updatedEmployees}
      })

    }

}),
{
  name: "emp-storage", // name of the item in the storage (must be unique)
  skipHydration: true,
},))