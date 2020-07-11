import React from 'react'
import {useState,useEffect} from 'react'
import {fetchDailyData} from '../../Api'
import {Line,Bar} from 'react-chartjs-2';
import styles from "./Charts.module.css"



function Charts({country,countryInfos:{ confirmed, recovered, deaths }}) {

    const [dailyData, setDailyData] = useState([])

    useEffect(() => {

        const fetchApi = async() => {
            const fetchedData = await fetchDailyData()
            setDailyData(fetchedData)
        }
        fetchApi()
    },[country]);

    const lineChart = (
        dailyData.length ?
        <Line data={{
            labels: dailyData.map(({date}) => date),
            datasets: [{
                data: dailyData.map(({confirmed}) => confirmed),
                label: 'Infected',
                borderColor: '#3333ff',
                fill: true
            },{
                data: dailyData.map(({deaths}) => deaths),
                label: 'Deaths',
                borderColor: 'red',
                backgroundColor: 'rgba(255,0,0,0.5)',
                fill: true
            }]
        }} /> : null
    )


    const barChart = (
        dailyData.length ?
        <Bar data={{
            labels: ['Infected', 'Recovered', 'Deaths'],
            datasets: [{
                label: 'People',
                data: [confirmed.value,recovered.value,deaths.value],
                backgroundColor: ['rgba(0,0,255,0.5)','rgba(0,255,0,0.5)','rgba(255,0,0,0.5)'],
                fill: true
            }]
        }} /> : null
    )
    
    return (
        <div className={styles.container}>
           {country && country!=='global' ? barChart : lineChart}
        </div>
    )
}

export default Charts
