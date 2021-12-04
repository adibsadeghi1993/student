import "./App.css";
import { useState,useEffect } from "react";
import Checkboxes from "./Checkboxes";
import Radio from "./Radio";
import Range from "./Range";

function App() {
  const [name, setName] = useState("");
  const [family, setFamily] = useState("");
  const [gender, setGender] = useState("");
  const [range, setRange] = useState("");
  const [show, setShow] = useState(true);

  const [ckeckboxValues,SetCkeckboxValues] = useState([])
  const nameHandler = (e) => {
    setName(e.target.value);

  };


  useEffect(()=>{
    console.log("useEffect runs")
    
  },[family])



  const familyHandler = (e) => {
    setFamily(e.target.value);
  };
  return (
    <div className="App">
      <label>name:</label>
      <input type="text" value={name} onChange={nameHandler} />
      <label>family:</label>
      <input type="text" value={family} onChange={familyHandler} />
      <h1>
        input:{name}
        {family}
      </h1>
     <button onClick={()=>setShow(!show)}>click</button>
      <Checkboxes SetCkeckboxValues={SetCkeckboxValues} ckeckboxValues={ckeckboxValues} />
      <Radio gender={gender} setGender={setGender}/>
        {show?<Range range={range}  setRange={setRange}/>:<p>please click to show range input</p>}
    </div>
  );
}

export default App;
