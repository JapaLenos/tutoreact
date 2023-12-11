//Import librairie ou de composants
import React from "react";
import Button from "./Components/Button/Button";

function App() {
  
  const var1 = false;
  //Logique JS
  const renderOui = () => {
    if(var1 === true){
      return(<h1>Test</h1>)
    } else {
      return(<h1>No test</h1>)
    }
  }

  return (
    //Logique HTML
    <div className="App">
      <h1>Bonjour : {process.env.REACT_APP_CLE_API_POPOW}</h1>
      {renderOui()}
      <Button title="blabla" popow="ui" wendy = "chic fille" />
      <Button title="blabla" popow="ui" wendy = "chic fillepetite" />
    </div>
  );
}

export default App;
