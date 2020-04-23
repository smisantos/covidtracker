import React, { Component } from 'react'
import { Cards, Chart, CountryPicker } from './components';

import { fetchData } from './api';

import image from './images/logo.png';

import styles from './App.module.css';

// Material UI
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'Varela Round',
            'sans-serif'
        ].join(','),
    }
});


export default class App extends Component {

    state = {
        data: {},
        country: ''
    }
    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData });
    }

    handleCountryChange = async (country) => {

        //fetch the data
        const dataByCountry = await fetchData(country);
        // set the data
        this.setState({ data: dataByCountry, country: country });
    }

    render() {

        const { data, country } = this.state;
        return (
            <ThemeProvider theme={theme}>
                <div className={styles.container}>
                    <img className={styles.image} src={image} alt="COVID-19" />
                    <Cards data={data} />
                    <CountryPicker handleCountryChange={this.handleCountryChange} />
                    <Chart data={data} country={country} />
                </div>
            </ThemeProvider>
        )
    }
}
