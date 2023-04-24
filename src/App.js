import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import CoinPage from './Pages/CoinPage';
import Navbar from './Components/Navbar';

function App() {

  
  return (
    <main className="App">
      <Navbar />
      < Routes>
        <Route path='/' exact element= {<Home />} />
        <Route path='/coin/:id'  element= {<CoinPage />} />              
      </Routes>
      
    </main>
  );
}

export default App;
