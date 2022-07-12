import React, { Component } from 'react'

export default function HOCCounter(OriginalComp) {
  //using HOC 
  //HOC is a costum component wraping another component to enable reusability 
  //here we used hoccounter as hoc component that is wraping newComp class component
  class newComp extends Component
    {
       constructor(props){
           super(props);
           this.state = {count: 0}
       }

       incount = () => {
         this.setState({count: this.state.count+1})

       }
        
       render(){
           return (<OriginalComp count={this.state.count}
            increasecount ={this.incount}
           />)
       }
    }
    return (newComp);
}
