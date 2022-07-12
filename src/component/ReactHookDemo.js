import React, { useState, useEffect } from 'react'

export default function ReactHookDemo() {
  
    const [count,setcount] = useState(0);
    const [name,setname] = useState({firstName:"",lastname:""});
    const [items,setitems] = useState([]);
    const [x,setX] = useState();
    const [y,setY] = useState();

     console.log.apply("react hook demo starts here")
    //1st parameter to use effect is function defination 
    // We can control the execution of useeffect function
    // by passing the 2nd parameter to useeffect function
    // in 2nd parameter we pass array of different states used to define the lifecycle
    useEffect(()=>{
      console.log("useeffect is executed");
      window.addEventListener("mousemove",logMousePosition);
      
      //CLEARANCE CODE by using return fxn
      return () => {console.log("clearance code")
             window.removeEventListener("mousemove",positionstop);    
    }

    }, [count,name]);

    
    const positionstop =(event) => {
      console.log("X: and   Y: stoped ");
    
    } 

    const logMousePosition =(event) => {
      setX(event.clientX);
      setY(event.clientY);
      console.log("X: " + x + " Y: " + y);
    
    } 

    const handlefistname= (event) => {
      event.preventDefault();
      setname({...name,firstName:event.target.value});
    }
    const handlelastname= (event) => {
      event.preventDefault();
      setname({...name,lastname:event.target.value});
    }

    const additems = function()
    {
      setitems([...items,{id: items.length,value:Math.random()}]);
    }
    return (
    <div> ReactHookDemo
       <button onClick={() =>{ setcount(count+1); }}>Increase count</button>
        Count: {count}
        <button onClick={() => {setcount((precount) => { return precount-1;}) }}>Decrease count</button> 
      <br/>
      firstName: <input type="text" value={name.firstName} onChange={handlefistname}/>
      <br/>
      lastname: <input type="text" value={name.lastname}  onChange={handlelastname} />
      <br/>
      firstName: {name.firstName} - lastname: {name.lastname}
      <br/>
      <button onClick={additems}>Generic Random Number generator:</button> 
      <br/>
      {
           items.map((numobj,index) =>{
            return <li key={index}> {numobj.value }</li>
            })
      }
      <br/>
      <p onClick={positionstop}>Mouse position - X: {x} - Y: {y}</p>
    </div>
  )
  console.log("reacthookdemo ends here");
}
