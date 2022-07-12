import React,{ Component, useState } from "react";
import './PhoneBookDemo.css';
export default function PhoneBookDemo(){

    const [phoneBook,setPhoneBook] = useState([{phoneNo: 3256412854, name: "Ankush" , emailId: "ankushbhajva12@gmail.com"},{phoneNo: 9854251356, name: "Prakhar" , emailId: "praprokhar@gmail.com"},{phoneNo: 9532657415, name: "Lavpreet" , emailId: "lav1211preet@gmail.com"}]); 

        return (
        <div className='app-container'>
            <table>
            <thead>
            <tr>
            <th>phoneNo</th>
            <th>contact Name</th>
            <th>Contact email</th>
            </tr>
            </thead>
            <tbody>
           { phoneBook.map((phone,phoneIndex) => (
               <tr  key={phoneIndex}>
                   <td>{phone.phoneNo}</td>
                   <td>{phone.name}</td>
                   <td>{phone.emailId}</td>
                </tr> ))}
            </tbody>
            </table>
         </div>);
}