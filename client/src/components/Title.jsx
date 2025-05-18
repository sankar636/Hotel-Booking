import React from 'react'

const Title = ({title, subTitle, aline}) => {
  return (
    <div className={`flex flex-col ${aline}`}>
        <h1 className='text-4xl md:text-[30px]'>{title}</h1>
        <p className='text-sm md:text-base mt-2 max-w-174 text-gray-500/90'>{subTitle}</p>
    </div>
  )
}

export default Title