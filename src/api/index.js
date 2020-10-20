import axios from "axios";

let url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  let changeableURL = url;

  if (country) {
    changeableURL = `${url}/countries/${country}`;
  }

  try {
    const response = await axios.get(changeableURL);
    const data = {
      confirmed: response.data.confirmed,
      recovered: response.data.recovered,
      deaths: response.data.deaths,
      lastUpdate: response.data.lastUpdate,
    };

    return data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    const modifiedData = data.map((data) => ({
      confirmed: data.confirmed.total,
      deaths: data.deaths.total,
      date: data.reportDate,
    }));

    return modifiedData;
  } catch (err) {
    console.log(err);
  }
};

export const fetchCountries = async () => {
  const data = await axios.get(`${url}/countries`);
  const countries = data.data.countries;
  return countries.map((country) => country.name);
};
