import React, { Component } from 'react';
import {Cards, Chart, CountryPicker} from './components/index';
import {fetchData} from './components/api';

import styles from './App.module.css';

class App extends Component {
  state = {
    data : {},
    country: ''
  }

  async componentDidMount(){
    const data = await fetchData();
    
    this.setState({data})
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({data : fetchedData, country});
  }

  render() {
    const {data, country} = this.state;

    return (
      <div className={styles.container}>
        <Cards data={data}/>
        <CountryPicker handleCountryChange= {this.handleCountryChange}/>
        <Chart data={data} country={country}/>
      </div>
    )
  }
}

export default App;