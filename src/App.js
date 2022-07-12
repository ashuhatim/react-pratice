import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import MyWebsite from './component/MyWebsite';
import MySite from './component/MySite';
import LifeCycleDemo from './component/LifeCycleDemo';
import Phonebook from './component/Phonebook';
import PhonebookDemo from './component/PhoneBookDemo';
import Empform from './component/Empform';
import ReactHookDemo from './component/ReactHookDemo';
import HOCClickCounter from './component/HOCClickCounter';
import HOCHowerCounter from './component/HOCHowerCounter';
import RefDemo from './component/RefDemo';
import { useState } from 'react';
import ContextCompA from './component/ContextCompA';
import React from 'react';
export const NameContext= React.createContext();
export const CompanyContext= React.createContext();
//. means current folder

function App() {
  
  //for context api 
  const [name,setName]  = useState({fn: "Ashutosh", ln:"Yadav"})
  const [companyname,setCompanyname] = useState("Capgemini")
  
  
  return (
    <div className="App">
      <NameContext.Provider value ={name}>
      <CompanyContext.Provider value = {companyname}>
      <ContextCompA/>
      </CompanyContext.Provider>
      </NameContext.Provider>

      <RefDemo/>
      <HOCClickCounter/>
      <HOCHowerCounter/>
       <ReactHookDemo/>
      <div className='empform'> 
        <Empform/>
      </div>
      <p className ="para1">......reference para........</p>
      <Header myname="Ashutosh Yadav"/>
      <MyWebsite company="Capgemini" mypost="Software Engineer"/>
      <MySite company="Capgemini" mypost="Software Engineer"/>
      <Footer mylocation="Uttar Pradesh, INDIA" mycontact="9462331983"/>
      <LifeCycleDemo country="India"/>
      <div className="tables">
        <Phonebook/>
        <PhonebookDemo/>
      </div>

    </div>
  );
}

export default App;
