import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { decrement } from '../redux/CounterSlice';

const Counter = () => {

    const count = useSelector(store => store.counter.value);
    const dispatch = useDispatch()
    
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={()=> dispatch(increment())}>Increment</button>
      
    </div>
  )
}

export default Counter

