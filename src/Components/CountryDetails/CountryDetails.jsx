import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

// import countriesArr from '../countries.json';

function CountryDetails() {
  const [country, setcountry] = useState(null);

  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${id}`)
      .then((info) => {
        setcountry(info.data);
      });
  }, [id]);

  return (
    <div className="col-6">
      {country && (
        <>
          <div class="col-6">
            <h1>{country.name.common}</h1>
            <table class="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{ width: '30%' }}>Capital</td>
                  <td>{country.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {country.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      {country.borders.map((element) => {
                        return <li>{element}</li>;
                      })}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}

export default CountryDetails;
