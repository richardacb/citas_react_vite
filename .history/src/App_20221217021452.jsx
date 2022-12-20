import { useState } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  return (
    <div className="container">
      <Header />
      <Formulario />
      <ListadoPacientes /> 
    </div>
  );
}

export default App;
