import { useReducer, useState } from "react";
import "./App.css";
import { ListaTareas } from "./components/ListaTareas";

function App() {
  return (
    <div className="App">
      <ListaTareas />
    </div>
  );
}

export default App;
