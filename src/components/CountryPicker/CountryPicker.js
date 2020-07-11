import React from 'react'
import {useState,useEffect} from 'react'
import {FormControl,NativeSelect} from '@material-ui/core'
import styles from './CountryPicker.module.css'
import {fetchCountries} from '../../Api'

function CountryPicker({handleCountryChange}) {

    const [countries, setCountries] = useState([])

    useEffect(() => {
        const fetchApi = async () => {
            const fetchedCountries = await fetchCountries()
            setCountries(fetchedCountries)
        }
        fetchApi()
    }, [])

    return (
            <FormControl className={styles.formControl}>
                <NativeSelect onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="global">Global</option>
                    {countries.map((country , i) => 
                        <option key={i} value={country}>{country}</option>
                    )}
                </NativeSelect>
            </FormControl>
    )
}

export default CountryPicker
