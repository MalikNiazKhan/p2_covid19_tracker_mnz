import React from 'react';
import {Grid} from '@material-ui/core';
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import fetchData from './api';

import coronaImage from './images/image.png';

class App extends React.Component{

  state ={
      data:{},
      country: '',
  }

  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
    // console.log('componentDidMount: ');
    // console.log(this.state.data);
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  }

  render(){

    const { data, country } = this.state;

    return(
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="COVID-19"/>
      
        <CountryPicker handleCountryChange ={this.handleCountryChange}/>
      
     
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Cards data={data} />
        </Grid>
        <Grid item xs={12} sm={6}>
        <Chart data={data} country={country}/>
        </Grid>
      </Grid>
  
      
      </div>
    )
  }
}

export default App;
