import React from "react";

class Header extends React.Component
{
    //we extend react.component to convert es6 to react code 
   constructor(props){
        super(props)
   }
   //-----------Mendetory component in Class is render() function
   render(){
    // Render function returns JSX. JSX code should be written as block level element 
    // Eg
    // return(<div>Demo</div>); // here <div></div> is a block level element
    
    return(<div><marquee><h4>Welcome to my home page: {this.props.myname}</h4></marquee>
    <a>Home</a><a>My Profile</a>
    <hr color="green" size="3"/></div>);

   }
}

export default Header;
