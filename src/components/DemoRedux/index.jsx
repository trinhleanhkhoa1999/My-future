import React from 'react'
import { useDispatch, useSelector } from 'react-redux';


export default function DemoRedux() {
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    console.log(state);
    const tang=(value)=>{
        console.log('vulue ben deredux',value);
        dispatch({type:"TANG",payload:value})
    }
    const giam=(value)=>{
        dispatch(
            {
            type:"GIAM",
            payload:value
        }
        )
    }
    return (
        <div style={{height:'100px',backgroundColor:'red'}}>
          <button className="btn btn-info" onClick={()=>tang(5)}>tang</button>
          <button className="btn btn-success" onClick={()=>giam(3)}>giam</button>
          <p>dasfghj</p>
           <p>{state.Khoa}</p>
        </div>
    )
}
