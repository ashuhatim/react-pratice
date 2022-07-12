import React, { Component, PureComponent } from 'react'

export default class LifeCycleDemo extends Component {
 
//1(Initial render), 2(rerender), 3(Unmounting phase)--------------
  //------(first)----------1.1-----------------
  constructor(props){
    super(props);
    this.state={
      location:"Pune",
      country: "Canada"
    }
    console.log("constructor to the lifecycle demo is executed");

  }

  //----------(Second,forth)-------1.2 and 2.1 --------------------
  static getDerivedStateFromProps(props1,states1){
    console.log(" Before if condition, Lifecycle demo getDrivedStateFromProps executed:\n Country: " +
    props1.country + "\n---State location: " + states1.location + "  ---State country: " + states1.country);

    if(props1.country!==states1.country){
      //change in props
      return {country:props1.country};
    }else{
      //no change
      return null; 
    }
   
    }


 //-------(fifth)----------- 2.2 ------------------------
 shouldComponentUpdate(){

  console.log("Lifecycle demo shouldcomponentUpdate executed");
    return true;
 }
 

  //---------------- 1.3 and 2.3 -----------------
  render() {
    return (
      <div>
      <div>location : {this.state.location} ,  country : {this.props.country} , StateObjectCountry: {this.state.country}</div>
      <button onClick={() => {this.setState({location:"mumbai"})}}>Change location</button>
      </div>
    )
  }


 //-------(third)----------- 1.4 -----------------------
 componentDidMount(){
 console.log("Lifecyle demo component did mount executed");
 
 } 

 //--------(Sixth)----------- 2.4 --------------------------
 getSnapshotBeforeUpdate(prevProps,prevState){
  console.log("Lifecyle demo getSnapshotBeforeUpdate executed: previous country: " + prevProps.country + "  previous location: " + prevState.location + ",  state obj country: " + prevState.country);
  return null;
 }

 //---------(Seventh)--------- 2.5 ----------------------
 componentDidUpdate(){
  console.log("Lifecyle demo componentDidUpdate executed");
  
 }

 componentWillUnmount(){
  console.log("Lifecyle demo Unmounting function executed");
  
 }

}
