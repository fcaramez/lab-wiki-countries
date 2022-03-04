import './App.css';
import Navbar from './Components/NavBar/NavBar';
import CountriesList from './Components/CountriesList/CountriesList';
import { Routes, Route } from 'react-router-dom';
import CountryDetails from './Components/CountryDetails/CountryDetails';
import countries from './countries.json';

function App() {
  return (
    <div className="App container-fluid">
      <div className='row'>
        <Navbar />
      </div>

      <div className="row">
        <div className="col-6">
          <CountriesList countries={countries} />
        </div>
        <Routes>
          <Route path="/:id" element={<CountryDetails />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
