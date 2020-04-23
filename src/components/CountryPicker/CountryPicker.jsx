import React, { useState, useEffect } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'
import { fetchCountryList } from '../../api'

import styles from './CountryPicker.module.css'

const CountryPicker = ( {handleCountryChange}) => {
  const [countryData, setCountryData] = useState([])

  useEffect(() => {
    const fetchAPI = async () => {
      setCountryData(await fetchCountryList())
    }

    fetchAPI()
  }, [])

  return (
    <FormControl className={styles.FormControl}>
      <NativeSelect  defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
        <option value="">
          Global
        </option>
        {countryData.map(({ name, i }) => 
          <option key={i} value={name}>
            {name}
          </option>
        )}
      </NativeSelect>
    </FormControl>
  )
}

export default CountryPicker


