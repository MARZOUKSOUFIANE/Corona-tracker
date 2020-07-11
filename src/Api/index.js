import axios from 'axios'

const uri = 'https://covid19.mathdro.id/api'

export const fetchData = async (country) => {
    let changeableUrl = uri

    if(country && country!=='global'){
        changeableUrl = `${uri}/countries/${country}`
    }

    try{
        const {data:{confirmed,recovered,deaths,lastUpdate}} = await axios.get(changeableUrl)
        return {confirmed,recovered,deaths,lastUpdate}
    }
    catch(error){
        console.log(error)
    }
}

export const fetchDailyData = async () => {
    try{
        const {data} = await axios.get(`${uri}/daily`)
        const modifiedData = data.map((dailyData => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        })))
        return modifiedData
    }
    catch(error){
        console.log(error)
    }
}

export const fetchCountries = async () => {
    try{
        const {data:{countries}} = await axios.get(`${uri}/countries`)
        const modifiedData = countries.map((country) => country.name)
        return modifiedData
    }
    catch(error){
        console.log(error)
    }
}