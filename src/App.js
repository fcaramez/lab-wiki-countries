import './App.css';
import Navbar from './Components/NavBar/NavBar';
import CountriesList from './Components/CountriesList/CountriesList';
import {Routes, Route} from 'react-router-dom'
import CountryDetails from './Components/CountryDetails/CountryDetails';
import countries from "./countries.json"

function App() {
  return <div className="App">
   <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />
          <Routes>
            <Route path="/:id" element={<CountryDetails />}></Route>
          </Routes>
        </div>
      </div>
    </div>
}

export default App;
