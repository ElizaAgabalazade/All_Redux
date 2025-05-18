import React from 'react'
import {Link} from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
      <Link to='/' >Home</Link>
      <Link to='/about' style={{marginLeft:'20px'}}>About</Link>
      <Link to='/users' style={{marginLeft:'20px'}}>Users</Link>
      {/* <Link to='/mal' style={{marginLeft:'20px'}}>Mal</Link> */}
    </div>
  )
}

export default Navigation
