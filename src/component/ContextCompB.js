import React, { useContext } from 'react'
import { NameContext,CompanyContext } from '../App'


export default function ContextCompB() {
  
    const uname = useContext(NameContext);
    const ucompany = useContext(CompanyContext);
    return (
    <div>ContextCompB
        <p>Name: {uname.fn} - {uname.ln}</p>
        <p>Company: {ucompany} </p>
    </div>
  )
}
