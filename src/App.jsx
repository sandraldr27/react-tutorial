/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Route, Routes, Link, Outlet } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home';
import Characters from './pages/Characters';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}> {/*Esta es la ruta principal llamada Layout. Abro mi ruta principal*/}
            <Route path="/" element={<Home />}></Route> {/*Esta es mi primera sub ruta: Home*/}
            <Route path="/characters" element={<Characters />}></Route> {/*Esta es mi segunda sub ruta: Characters*/}
          </Route> {/*Cierro mi ruta principal */}
        </Routes>
      </Router>
    </div>
  );
}

function Layout() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/characters">Characters</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default App;

{/*

IMPORTANTE: Voy a comentar todo el bloque de código usado antes para habilitar el routing con react-router-dom


import Title from './components/Title'    
// eslint-disable-next-line no-unused-vars
import Button from './components/Button'
import { useState, useEffect } from 'react';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [count, setCount] = useState(0);
    console.log(count);

    useEffect(() => {
      console.log("useEffect is Working also when count is changing!!");
    }, [count]);
    
  return (
    <div className="App">

  -----------------------------------------------------------------------  
    Vamos a comentar las siguientes líneas de código:
        <Title text="Texto Renderizado de mi componente Title.jsx"/>
    <Button onClick= {() => alert("Primer botón Click Me")}text="Click Me"/>
  ------------------------------------------------------------------------ 
      
      <Button onClick={() => setCount(count + 1)} text="+1"/>

      <Title text={`Number of Clicks: ${count}`}/>

    </div>
        );
}
export default App

*/}
