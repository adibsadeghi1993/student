import React,{useEffect} from 'react'

const Range = ({range,setRange}) => {


    useEffect(()=>{
        console.log("useEffcet in Range component was run")
          return ()=>{
            console.log("range was unmount") 
           
          }
    },[])
    return (
        <div>
            <input type="range" min={0} max={22000} value={range} onChange={(e)=>setRange(e.target.value)}/>
        </div>
    )
}

export default Range
