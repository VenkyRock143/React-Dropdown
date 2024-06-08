import React from "react";
import Dropdown from "./components/dropdown";


const items = ["Yes", "Probably Not"];
function App() {
  return (
    <div className="App">
       <Dropdown items ={items} />
    </div>
  );
}

export default App;
