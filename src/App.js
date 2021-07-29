import React from "react";
import MyForm from "./form/MyForm";


const App = () => {
  
    const title = 'Simple form';

    return (
      <div className="App">
          <h1>{title}</h1>
          <MyForm />
      </div>
    );
  }
  

  export default App;
