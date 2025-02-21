import './App.css';
import { useEffect } from 'react';
import Aos from 'aos';
import { BrowserRouter } from "react-router-dom";
import Home from './Pages/Home';

function App() {

  useEffect(() => {
    Aos.init();
  }, [])



  return (
    <BrowserRouter basename="/LandingPage-danstring">

      <div className="App">

        <Home />

      </div>
    </BrowserRouter>
  );
}

export default App;
