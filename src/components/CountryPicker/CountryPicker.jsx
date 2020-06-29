import React, { useState, useEffect } from 'react';
import {NativeSelect, formControl, StylesProvider} from '@material-ui/core';

import styles from './CountryPicker.module.css';
import {fetchCountries} from '../api';


const CountryPicker = ({handleCountryChange}) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            setFetchedCountries(await fetchCountries());
        };
        fetchApi();
    }, [setFetchedCountries]);  

        console.log(fetchedCountries);

    return (
        <formControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={e=>handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {fetchedCountries.map((country, index) => <option key={index} value={country}>{country}</option>)};
            </NativeSelect>
        </formControl>
    )
};

export default CountryPicker;