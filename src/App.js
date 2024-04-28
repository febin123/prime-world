
import './App.css';
import {BrowserRouter, Routes,Route}from 'react-router-dom'
import Checkout from './Compoenent/Checkout';
import Home from './Compoenent/Home';
function App() {
  return (
    <BrowserRouter>
    <div className="app">
    
        <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/checkout" exact element={<Checkout/>}/>
        </Routes>
       
    </div>
    </BrowserRouter>
  );
}

export default App;
