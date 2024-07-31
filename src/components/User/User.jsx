import React from 'react'
import {useParams} from 'react-router-dom'
function User() {
    const {user_Id}= useParams()
  return (
    <div className='bg-gray-500 text-4xl text-center text-white'>
      User: {user_Id}
    </div>
  )
}

export default User
