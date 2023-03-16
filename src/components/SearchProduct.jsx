import { useState, useEffect } from 'react';

import searchProduct from '../services/productsService';

const SearchProduct = ({setResults}) => {
  const [searchWord, setSearchWord] = useState('');
  //1. uzsetinti paieskos zodi i state\
  const handleChange = (searchWord) => {
    setSearchWord(searchWord);
  }
  //2. funkcija kuri kreipesi i servisose esanti API
  const getProducts = (searchWord) => {
    searchProduct(searchWord).then(res => {
      setResults(res)
    })
  }
  //3.useEffect'as kuris stebi, kada kreptis i API
  useEffect(() => {
    getProducts(searchWord);
  }, [searchWord])



  return (
    <div>
      <input
        type="text"
        value={searchWord}
        onChange={(e => handleChange(e.target.value))}
      />
    </div>
  )
}

export default SearchProduct