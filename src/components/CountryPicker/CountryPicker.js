import React, { useState, useEffect } from "react";

import { fetchCountries } from "../../api/index";

const CountryPicker = ({ handleChange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setCountries(await fetchCountries());
    };

    fetchData();
  }, []);

  return (
    <div className="mt-12 text-black text-center">
      <select onChange={(e) => handleChange(e.target.value)}>
        <option value="">Global</option>
        {countries.map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountryPicker;
