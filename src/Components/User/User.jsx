import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {id}=useParams()
  return (
    <div className='bg-grey-700 text-white text-3xl'>user:{id}</div>
  )
}

export default User