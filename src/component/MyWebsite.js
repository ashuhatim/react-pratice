import React, { Component } from 'react'
import Login from './Login';


export default class MyWebsite extends Component {
  
    constructor(props)
     {
         super(props);
         this.state={mygoal: "be a UX UI engineer at flipkart",
        myhobies: "cycling,playing video games",
        mygames: "",
        cityList:["Ghaziabad","Gurgoan","Allahabad","Gorakhpur","Kanpur"],
        empList: [{empName:"Akash",empSal:12265,empID:321},{empName:"Sidhhant",empSal:86574,empID:654},{empName:"Tushar",empSal:546656,empID:231},{empName:"Ranjeet",empSal:856465,empID:893}]
      }
        //if normal fxn is defined for event then this. should be handled 
        // or if we define an arrow fxn no need to handle the fxn in constructor
        this.handleClick = this.handleClick.bind(this);
      }

     handleClick= function ()
     {// state is mutatable in class component in react and also for fxnal component from version 17 onwards
        this.setState({myhobies: "cycling, playing video games, cooking"});
        
      }
      handlegames= () =>{
     // state is mutatable in class component in react and also for fxnal component from version 17 onwards
        this.setState({mygames: " BGMI and mobile legends "});
        
      }
    render() {
      var newCityList = this.state.cityList.map((city,index) => {
       return <h6 key={index}>City: {city}</h6>

      });
      var newEmpList = this.state.empList.map((emp,empIndex) => {

        return <li key={empIndex}>Emp ID: {emp.empID} , Emp Name: {emp.empName}, Emp Salary: {emp.empSal}</li>
      });
    return (
     <div>
         <p>Hi, all</p>
         Good to see you all here, let me introduce my self.  
         <p>I am currently working at {this.props.company} as a {this.props.mypost} </p>
         <p>I aim to {this.state.mygoal}</p>
         <button onClick={this.handleClick}>Add hobbies</button>
         <p>Some of my hobbies are {this.state.myhobies}</p>
         <p>click to know my favourate video games</p> 
         <p><button onClick={this.handlegames}>my fav games</button> {this.state.mygames}</p>
         <Login/>
         <br/>
         {newCityList}
         <br/>
         {newEmpList}
      </div>
    );
    //defining button and
    //handling button click event
  };
}
