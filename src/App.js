import './App.css';
import { BrowserRouter } from "react-router-dom";
import Home from './Pages/Home';

function App() {
  return (
    <BrowserRouter basename="/LandingPage-danstring">

      <div className="App">

        <Home />

      </div>
    </BrowserRouter>
  );
}

export default App;
