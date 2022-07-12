import React, { Component, useState } from "react";
import Login from './Login';

export default function MySite(props){
 
    // to use state in a function we can mutate the state using useState method
    // we use useState hook for defining state in functional component
    const [mygoal,setGoal] = useState("be a UX UI engineer at flipkart");
    const [myhobies,setHobbies] = useState("cycling,playing video games");
    const [mygames,setGames] = useState("");
    const[cityList,setCityList] = useState(["Ghaziabad","Gurgoan","Allahabad","Gorakhpur","Kanpur"]);
    const[empList,setEmpList] = useState([{empName:"Akash",empSal:12265,empID:321},{empName:"Sidhhant",empSal:86574,empID:654},{empName:"Tushar",empSal:546656,empID:231},{empName:"Ranjeet",empSal:856465,empID:893}]);
    
    const handleClick = () => {
      setHobbies("cycling, playing video games, cooking");
   }
   const handlegames =()=>{
      setGames("BGMI and Mobile Legends");
   }
   var newCityList = cityList.map((city,index) => {
      return <h6 key={index}>City: {city}</h6>

     });
     var newEmpList = empList.map((emp,empIndex) => {

       return <li key={empIndex}>Emp ID: {emp.empID} , Emp Name: {emp.empName}, Emp Salary: {emp.empSal}</li>
     });

   return (
    <div>
    <p>Hi, all</p>
    Good to see you all here, let me introduce my self.  
    <p>I am currently working at {props.company} as a {props.mypost} </p>
    <p>I aim to {mygoal}</p>
    <button onClick={handleClick}>Add hobbies</button>
    <p>Some of my hobbies are {myhobies}</p>
    <p>click to know my favourate video games</p> 
    <p><button onClick={handlegames}>my fav games</button> {mygames}</p>
    <Login />
    <br/>
    {newCityList}
    <br/>
    {newEmpList}
 </div>
   );    
   //in functional component we do not use this.props instead we use directly props

}