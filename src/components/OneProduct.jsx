import React from 'react'

import './oneProduct.css'

const OneProduct = (props) => {
    console.log(props)
    console.log(props.productsFromApi)
    const items = props.productsFromApi.Search
    console.log(items)
  return (
    <div className='productList'>
        {
            items?.map(item => (
                <div key={item.imdbID
                } className='oneProduct'>
                    <h2>{item.Title}</h2>
                    <h3>{item.Genre}</h3>
                    <p>{item.Plot}</p>
                    <img src={item.Poster} alt={item.Title} />
                    <p>{item.Released}</p>
                </div>
            ))
        }
    </div>
  )
}

export default OneProduct