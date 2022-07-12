import React from "react";

function Footer(props){

    const hrStyle={color:'magenta'};
    const hrStyle1 = { color: "orange",
        size:'10px'}
    return (
      
      <div >
          <hr />
          @Copyright of ashu.tosh31051997@gmail.com, location : {props.mylocation}
          <h5 style={hrStyle1}>contact us - {props.mycontact}</h5>
          <h5><a href ="" style={hrStyle}>AboutUs</a></h5>
           </div>  
    );
}
export default Footer; 