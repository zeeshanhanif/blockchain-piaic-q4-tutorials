import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByValue, updateName } from '../store/action';

/*
function abc (state){
    return state.counter;
}
*/
function Counter() {

    //const [counter, setCounter] = useState(0);
    const [value, setValue] = useState();
    const [nameValue, setNameValue] = useState("");
    const dispatch = useDispatch();
    //const counter = useSelector(abc);
    const counter = useSelector((state)=>{
        return state.counter;
    });

    const name = useSelector((state)=>{
        return state.user.name
    })

  return (
    <div>
        <div>Hello Counter {counter}</div>
        <div>Hello Value {value}</div>
        <div>Name {name}</div>

        <div>
            <button onClick={()=>{
                //setCounter(counter+1);
                dispatch(increment())
            }}>Increment</button>
        </div>
        <div>
            <button onClick={()=>{
                //setCounter(counter-1);
                dispatch( decrement() )
            }}>Decrement</button>
        </div>
        <div>
            <input type="text" onChange={(e)=>{
                setValue(e.target.value);
                //setCounter(counter+ Number(e.target.value));
            }} ></input>
            <button onClick={()=>{
                //setCounter(counter+ Number(value));
                
                dispatch(incrementByValue(Number(value)) )
            }}>Increment By Value</button>
        </div>
        <div>
            <input type="text" onChange={(e)=>{
                //setName(e.target.value);
                setNameValue(e.target.value);
            }} ></input>
            <button onClick={()=>{
                dispatch(updateName(nameValue) )
            }}>Update By Name</button>
        </div>
    </div>
  );
}

export default Counter;
