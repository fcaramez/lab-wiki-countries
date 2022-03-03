import React, { useState } from 'react';
import countries from '../../countries.json';
import { Link } from 'react-router-dom';

function CountriesList() {
  const [country, setCountry] = useState(countries);
  return (
    <div>
      <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
        {country.map((country) => {
          return (
            <div className="list-group">
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code}.png`}
                alt={country.name.common}
              ></img>
              <Link
                to={`/${country.alpha3Code}`}
                className="list-group-item list-group-item-action"
              >
                {country.name.common}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CountriesList;
