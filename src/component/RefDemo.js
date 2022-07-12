import React, {useEffect, useRef} from 'react'

export default function RefDemo() {

//   const nameref = React.createRef();
  const nameref = useRef();

  useEffect(() => {
      nameref.current.focus();
  })
  return (
    <div>

        Name: <input type="text" ref={nameref}/>
        <button onClick={() => {
            alert("u type: " + nameref.current.value )
        }}> click</button>
       
    </div>
  )
}
