import React from 'react'
import './search-box.style.css'

export const SearchBox = ({placeholder, handleChange}) => (
    <input type="text" placeholder={placeholder}
            className='search'
            onChange={handleChange} 
    /> );