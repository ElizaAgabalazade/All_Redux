import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllData } from '../redux/malSlice';


const Mal = () => {
  const dispatch = useDispatch();
  // const { mallar, loading } = useSelector(store => store.mal);
  const { mallar, loading } = useSelector(store => store.mallar);

  useEffect(() => {
    dispatch(getAllData())
  }, []);


  if (loading) {
    return <p>LOADING.....</p>
  }


  return (
    <div>
      {
        mallar && mallar.length > 0 ?
          (
            <ol>
              {
                mallar.map((item) => (
                  <li key={item.id}>{item.title}</li>
                ))
              }
            </ol>
          )
          :
          (
            <p>none</p>
          )
      }
    </div>
  )
}

export default Mal
