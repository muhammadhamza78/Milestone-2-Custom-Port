import React from 'react'

interface propsType{
    title:string;
}
const Header: React.FC<propsType> = ({title}) => {
  return (
    <div className='text-center text-6xl pb-8'>
      <p className='border-b-4 inline-block pb-2'>{title}</p>
    </div>
  )
}

export default Header
