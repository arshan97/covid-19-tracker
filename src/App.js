import React from "react";
import { fetchData } from "./api/index";
import Cards from "./components/Cards/Cards";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import Chart from "./components/Chart/Chart";
import Header from "./components/Header/Header";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    console.log(country);
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    return (
      <>
        <Header />
        <Cards data={this.state.data} />
        <CountryPicker handleChange={this.handleCountryChange} />
        <Chart data={this.state.data} country={this.state.country} />
      </>
    );
  }
}

export default App;
