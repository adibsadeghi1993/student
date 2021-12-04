import React from 'react'

const Radio = ({gender,setGender}) => {

    const radioHandler=(e)=>{
        console.log(e.target.value)
        setGender(e.target.value)

    }
    return (
        <div>
                <label>male
               <input type="radio"  checked={gender==="0"} value="0" onChange={radioHandler} />
               </label>  
               <label>fmale
               <input type="radio"  checked={gender==="1"} value="1" onChange={radioHandler} />
               </label> 
        </div>
    )
}

export default Radio
