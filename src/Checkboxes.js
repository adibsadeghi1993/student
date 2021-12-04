import React from 'react'

const Checkboxes = ({SetCkeckboxValues,ckeckboxValues}) => {

    const inputHandler=(e)=>{
     console.log(e.target.value)
   
     console.log(e.target.checked)
    //   const index=ckeckboxValues.indexOf(e.target.value)

      if(e.target.checked){
        SetCkeckboxValues([...ckeckboxValues,e.target.value])
        console.log(ckeckboxValues)
      }else{
         
        SetCkeckboxValues(ckeckboxValues.filter((c)=>c !== e.target.value))
        console.log(ckeckboxValues)
      }

    }
    return (
        <div>
           <label>ahvaz
               <input type="checkbox"  checked={ckeckboxValues.includes("ahvaz")} value="ahvaz" onChange={inputHandler} />
               </label> 
               <label>tehran
               <input type="checkbox" value="tehran" onChange={inputHandler} />
               </label>
               <label>sari
               <input type="checkbox" value="sari" onChange={inputHandler} />
               </label>
        </div>
    )
}

export default Checkboxes




