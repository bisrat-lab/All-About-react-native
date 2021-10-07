import React, { useState } from "react";
import "./App.css";

//! useState()
// function App() {
// const [state, setstate] = useState(0)
// const [name, setName] = useState({fname: "bis", lname:"kassa"})

//   return (
//     <div className="App">
//         <span>{state}</span>
//         <span>{name.fname}{name.lname}</span>

//         <button onClick={()=> setstate(state +1)}>inc</button>
//         <button onClick={()=> setName({...name, lname : "teg"})}>change</button>
//* useState doesn’t merge the rest of the state like setState. So, we must use spread.
//     </div>
//   );
// }

//! useRef()
// function App() {
//   const header = React.useRef();
//   const change = () => {
//     header.current.innerHTML = "Bonjour";
//   };
//   return (
//     <div>
//       <h1 ref={header}>Hello</h1>
//       <button onClick={change}>French?</button>
//     </div>
//   );
// }

//!useMemo()
function App() {
  const [counter1, setCounter1] = React.useState(0);
  const [counter2, setCounter2] = React.useState(0);

  const compute = () => {
    console.log(`Intensive work`);
    return `Computed Results`;
  };
  const computed = React.useMemo(() => compute(), [counter1]);
  
  return (
    <div>
      <h1>
        {counter1}, {counter2}
      </h1>
      <button onClick={() => setCounter1(counter1 + 1)}>INC1</button>
      <button onClick={() => setCounter2(counter2 + 1)}>INC2</button>
      <h2>{computed}</h2>
    </div>
  );
}

export default App;
