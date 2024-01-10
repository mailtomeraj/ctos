


import Link from "next/link";
import { Header } from "./components/Header";
import { EmployeeList } from "./components/EmployeeList";
import { Form } from "./components/Form";

export default function Home() {
  return (
    <main>
<Header/>
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      
     
       <div className='py-10 text-center text-xl font-normal'></div>
       <EmployeeList/>
            </div>
            
      
    </main>
  )
}
