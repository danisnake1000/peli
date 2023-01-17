import React from 'react'
import { Link } from 'react-router-dom'


export const Cards = ({pel}) => {
    const imgUrl = "https://image.tmdb.org/t/p/w300" + pel.poster_path
  return (
      <li className='font-bold'>
         
         <img className='w-auto rounded-xl'  src={imgUrl} alt={pel.title} />
        <div>{pel.title}</div>
        
     </li>

      
  )
}
