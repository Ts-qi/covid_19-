import React from 'react';

import { Cards, CountryPicker, Chart } from './components';
import { fetchData } from './api/';
import styles from './App.module.css';

import image from './images/image.png';
interface ICardsItemPops {
  confirmed: any;
  recovered: any;
  deaths: any;
  lastUpdate: string;
}
class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data: ICardsItemPops= await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country:string) => {
    const data: ICardsItemPops = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data={}, country } = this.state;
    const { confirmed, recovered, deaths,lastUpdate} = data as ICardsItemPops;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />
        <Cards confirmed={confirmed} recovered={recovered} deaths={deaths}  lastUpdate={lastUpdate}/>
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} /> 
      </div>
    );
  }
}

export default App;