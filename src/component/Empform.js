import React, { useState } from 'react'
import './PhoneBookDemo.css';
import { nanoid } from 'nanoid';
export default function Empform() {

    const[Empdetails,setEmpdetails]= useState([{Name: "Jenny Jones",Address: "Newyork",Phoneno:'1521615231',Email: "jinnyjones@gmail.com"},{Name: "nikhil",Address: "New Delhi",Phoneno:'8954256415',Email: "nikhilss@gmail.com"},{Name: "Pradeep",Address: "Uttar Pradesh",Phoneno:'54586584546',Email: "kuleep@gmail.com"},{Name: "Pradeep",Address: "Mumbai",Phoneno:'65465468545',Email: "pradeepsain@gmail.com"}]);
    const[addform,setAddform] = useState({
        Name:"",
        Address: "",
        Phoneno: "",
        Email: ""
    }); 

    const handleAddformChange = (event) => {

        event.preventDefault();
          
        const fieldname = event.target.getAttribute('name');
        const fieldValue = event.target.value;   
        const newformData = {...addform};
        newformData[fieldname] = fieldValue;
    

    setAddform(newformData);
};

const handleformSubmit = (event) => {

      event.preventDefault();

      const newAddEmpdetails = {
        id:nanoid(),
        Name: addform.Name,
        Address: addform.Address,
        Phoneno: addform.Phoneno,
        Email: addform.Email
      };
      const newAddEmpdetailss = [...Empdetails,newAddEmpdetails]
      setEmpdetails(newAddEmpdetailss);
};
    
    const orderby = (key)=> {
        return function(a,b){
            if(a[key] > b[key]) return +1;
            if(a[key]< b[key]) return -1;
          return 0;  
        }

    }
   
    const sortBy =(key) => {
       let EmpdetailsCopy = [...Empdetails].sort(orderby(key));
       setEmpdetails(EmpdetailsCopy); 
   }

      const getKey = function(){
           
      }
    return (
    <div className='app-container'>
        <table className='table'>
         <thead>
          <tr>
              <th className='Name' onClick={() => sortBy('Name')}>Name</th>
              <th className='Address' onClick={() => sortBy('Address')}>Address</th>
              <th className='Phone no' onClick={() => sortBy('Phoneno')}>Phone no</th>
              <th className='Email' onClick={() => sortBy('Email')}>Email</th>
          </tr>
         </thead>
         <tbody>
             {Empdetails.map((emp) => (
              
              <tr>
              <td>{emp.Name}</td>
              <td>{emp.Address}</td>
              <td>{emp.Phoneno}</td>
              <td>{emp.Email}</td>
            </tr>  
              
             ))}
            
         </tbody> 
        </table>
        <h2>Add more Empdetails</h2>
        <form onSubmit={handleformSubmit}>
            <input type='text' 
            name='Name' 
            required="required" 
            placeholder='enter your name'
            onChange={handleAddformChange}
            />
             <input type='text' 
            name='Address' 
            required="required" 
            placeholder='enter your address'
            onChange={handleAddformChange}
            />
             <input type='text' 
            name='Phoneno' 
            required="required" 
            placeholder='enter phone no.'
            onChange={handleAddformChange}
            />
             <input type='email' 
            name='Email' 
            required="required" 
            placeholder='enter your email'
            onChange={handleAddformChange}
            />

            <button type='submit'>Add</button>
        </form>

    </div>
  )
}
