import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

// export const fetchData = async () => {

const fetchData = async (country) => {
  let modifiedUrl = url;

  if(country){
    modifiedUrl = `${url}/countries/${country}`;
  }
  // console.log(modifiedUrl);

  try {

    const { data:{ confirmed, recovered, deaths, lastUpdate} } = await axios.get(modifiedUrl);
    // console.log(confirmed);
    return { confirmed, recovered, deaths, lastUpdate};

    // const response = await axios.get(url);
    // return response;

    //
    // destructure the received data by { data }
    // const { data } = await axios.get(url);
    //
    // const basicStats = {
    //   confirmed: data.comfirmed,
    //   recovered: data.recovered,
    //   deaths: data.deaths,
    //   lastUpdate: data.lastUpdate
    // }
    // return basicStats;
    //
  } catch (e) { console.log(e);}
  finally {}
}

export default fetchData;

export const fetchDailyData = async () => {

  try {
    const { data } = await axios.get(`${url}/daily`);
    const modifiedData = data.map( (dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate
    }))
    // console.log(data);
    return modifiedData;
  } catch (e) {

  } finally {

  }
}

export const fetchCountries = async () => {
  try {
    const { data: { countries }} = await axios.get(`${url}/countries`);
    return countries.map( (country) => country.name)
  } catch (e) {

  } finally {

  }
}
