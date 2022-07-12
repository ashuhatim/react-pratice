import React, { Component } from 'react'
export default class Phonebook extends Component {
  
    constructor(props){
       super(props);
       this.state ={
           phoneDetails:[{phoneNo: 3256412854, name: "Ankush" , emailId: "ankushbhajva12@gmail.com"},{phoneNo: 9854251356, name: "Prakhar" , emailId: "praprokhar@gmail.com"},{phoneNo: 9532657415, name: "Lavpreet" , emailId: "lav1211preet@gmail.com"}]
    }
    }
  
    render() {
        // var newPhoneList = this.state.phoneDetails.map((phone,phoneIndex) => {
        //     return <div><table key={phoneIndex}>
        //         <thead>
        //             <tr key={phoneIndex}>
        //         <th>phoneNo</th>
        //         <th>contact Name</th>
        //         <th>Contact email</th>
        //         </tr>
        //         </thead>
        //         <tbody>
        //            <tr  key={phoneIndex}>
        //                <td>{phone.phoneNo}</td>
        //                <td>{phone.name}</td>
        //                <td>{phone.emailId}</td>
        //             </tr> 
        //         </tbody>
        //         </table>
        //      </div>
        //   });
    return (
      <div>
          <p> Phone number details: </p> 
           <table>
                <thead>
                <tr>
                <th>phoneNo</th>
                <th>contact Name</th>
                <th>Contact email</th>
                </tr>
                </thead>
                <tbody>
                {this.state.phoneDetails.map((phone,phoneIndex) => (
                   <tr  key={phoneIndex}>
                       <td>{phone.phoneNo}</td>
                       <td>{phone.name}</td>
                       <td>{phone.emailId}</td>
                    </tr> 
                ))}
                </tbody>
            </table>
          
          </div>
    )
  }
}
//  <li key={phoneIndex}>
//Phone No: {phone.phoneNo} , Contact Name: {phone.name}, Contact email: {phone.emailId}</li>