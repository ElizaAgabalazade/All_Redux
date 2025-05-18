import React from 'react'
import {Link} from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
     <Link to='/' style={{marginRight:'20px'}}>Home</Link> 
     <Link to='/about' style={{marginRight:'20px'}}>About</Link> 
     <Link to='/post'>Post</Link> 
    </div>
  )
}

export default Navigation
