import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllData } from '../redux/postSlice';

const Post = () => { 
  const dispatch = useDispatch();
  const {posts, loading} = useSelector(store => store.eli);
  
  useEffect(() => {
    dispatch(getAllData())
  }, []);


  if(loading){
    return <p>Loading...</p>

  }



  return (
    <div>
      {
        posts && posts.length > 0 ?
        (
          posts.map((item) => (
            <p key={item.id}>{item.title}</p>
          ))
        ) : 
        (
          <p>not found</p>
        )
      }
    </div>
  )
}

export default Post
