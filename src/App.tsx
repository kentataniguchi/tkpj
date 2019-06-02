import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Home}/>
      <Route path='/test' component={()=><>testtttttttttttt</>} />
    </BrowserRouter>
  );
}

export default App;
