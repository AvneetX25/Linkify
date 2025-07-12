import React from 'react'
import ShortenItem from './ShortenItem'

const ShortenUrlList = ({ data }) => {
  console.log(data);
  if (!Array.isArray(data)) {
    return <div>No data found</div>; // or return null, or a skeleton loader
  }

  return (

    <div className='my-6 space-y-4'>
        {data.map((item) => (
            <ShortenItem key={item.id} {...item} />
        ))}
    </div>
  )
}

export default ShortenUrlList