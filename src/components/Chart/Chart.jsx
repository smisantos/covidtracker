import React, { useState, useEffect } from 'react';
import {fetchDailyData} from '../../api';
import {Line, Bar} from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart = ({data, country}) => {
    const [dailyData, setDailyData] = useState({});
    
    useEffect(() => {
        const fetchAPI = async() => {
            setDailyData(await fetchDailyData());
        };
        
        fetchAPI();
        
    }, []);

    const barChart = (
        data.confirmed
        ? ( 
        <Bar data = {{
                labels: ['Infectados','Recuperados','Óbitos'],
                datasets: [{
                    label: "Casos",
                    backgroundColor: ['rgba(255, 0, 0, 1)','rgba(0, 255, 0, 1)','rgba(0, 0, 0, 1)'],
                    data: [data.confirmed.value, data.recovered.value,data.deaths.value]
                }]
        }}
        options={{
            legend: {display: false},
            title: { display: true, text:`Dados actuais para ${country}`}
        }}

        />   ) : null
    );

    const lineChart = (
        dailyData.length 
            ? <Line data={{
            labels: dailyData.map(({ date }) => date),
            datasets:[{
                data: dailyData.map( ({confirmed }) => confirmed),
                label: 'Infectados',
                borderColor: 'red',
                fill: true
            },{
                data: dailyData.map(({deaths}) => deaths),
                label: 'Óbitos',
                borderColor: 'black',
                backgroundColor: 'rgba(0,0,0,0.8',
                fill: true
            }],
        }}
        /> : null
    );
  
    return(
        <div className={styles.container}>
            {country ? barChart : lineChart}
        </div>
    )
}

export default Chart;
