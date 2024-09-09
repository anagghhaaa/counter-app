import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement,reset,countWithNum } from './redux/counterSlice';
import { useState } from 'react'
function Counter() {
    const count=useSelector((state)=>state.counterReducer.counter)
    console.log(count);
    const dispatch=useDispatch()
     const[num,setNum]=useState(0)
    return (
        <>
            <div className='d-flex justify-content-center align-items-center' style={{ height: '80vh' }}>
                <div className='w-75 border border-2 border-dark p-5'>
                    <h3 className='text-center'>COUNTER</h3>
                    <h2 className='text-center'>{count}</h2>
                    <div className='d-flex justify-content-center mt-4'>
                        <button className='btn btn-success me-4' onClick={()=>{dispatch(increment())}}>+ Increment</button>
                        <button className='btn btn-danger me-4' onClick={()=>{dispatch(decrement())}}>- Decrement</button>
                        <button className='btn btn-secondary ' onClick={()=>{dispatch(reset())}}>Reset</button>
                    </div>
                    <div className='my-3 d-flex '>
                         <input type="number" placeholder='Enter Number' className='form-control' onChange={(e)=>{setNum(e.target.value)}}/>
                         <button className='btn btn-dark ms-2 'onClick={()=>{dispatch(countWithNum(num))}}> Count</button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Counter