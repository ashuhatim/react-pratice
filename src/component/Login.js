import React, { useState } from "react";

export default function Login() {

    const [isLoggedin, setIsLoggedin] = useState(false);
    const [buttontext,setButtontext] = useState("IN");
    const [buttontext1,setButtontext1] = useState("OUT");

    const Handlelog = () => {
          if (isLoggedin ==false)
          {
              setIsLoggedin(true);
              setButtontext1("OUT");
              setButtontext("IN");
          }
          else if(isLoggedin == true)
          {
              setIsLoggedin(false);
              setButtontext1("IN");
              setButtontext("OUT");
          }
    }
    return (
        <div>
            
            <p>You are logged {buttontext1} , Click to Log{buttontext}</p>
            <button onClick={Handlelog}>Log{buttontext}</button>
                        
        </div>
    );
}