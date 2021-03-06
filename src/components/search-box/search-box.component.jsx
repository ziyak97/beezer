import React from 'react'

import './search-box.styles.css'

const SearchBox = ({onSearchChange}) => (
  <input
    className='search-box'
    type='search'
    placeholder='search by name'
    onChange={onSearchChange}
  />
)

export default SearchBox