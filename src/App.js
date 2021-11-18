import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Assets from './pages/Assets';
import Main from './pages/Main';

function App() {
  // Observar que o Routes agora na versão 6 do react-router-dom substituiu o Switch e notar que Route deve ser declarado diferente de anteriormente
  // https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Main /> } />
        <Route path="/assets" element={ <Assets /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
