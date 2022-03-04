import React, { useState } from 'react';
import countries from '../../countries.json';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function CountriesList() {
  const [country, setCountry] = useState(countries);
  return (
    <div>
      <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
        {country.map((country) => {
          return (
            <li key={country.name.official}>
              <NavLink
                to={`/${country.alpha3Code}`}
                className="list-group-item list-group-item-actoin"
              >
                <img
                  src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                  alt={country.name.common}
                />
                {country.name.common}
              </NavLink>
            </li>
          );
        })}
      </div>
    </div>
  );
}

export default CountriesList;
