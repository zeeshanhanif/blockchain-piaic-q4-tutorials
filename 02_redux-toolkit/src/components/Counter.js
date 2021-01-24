import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByValue,updateName } from '../store/counterSlice';


function Counter() {
    const [value, setValue] = useState("");
    const [localName, setLocalName] = useState("Waqas");
    const dispatch = useDispatch();
    const counter = useSelector((state)=>{
        return state.counterReducer.counter;
    });
    const name = useSelector((state)=>{
        return state.counterReducer.user.name;
    });
  return (
    <div >
      <div>
          Hello Counter {counter}
      </div>
      <div>
          Hello Name {name}
      </div>

      <div>
            <button onClick={()=>{
               dispatch(increment())
            }}>Increment</button>
        </div>
        <div>
            <button onClick={()=>{
               dispatch(decrement())
            }}>Decrement</button>
        </div>

        <div>
            <input type="text" onChange={(e)=>{
                setValue(e.target.value);
                
            }} ></input>
            <button onClick={()=>{
                dispatch(incrementByValue(Number(value)))
            }}>Increment By Value</button>
        </div>

        <div>
            <input type="text" onChange={(e)=>{
                setLocalName(e.target.value);
                
            }} ></input>
            <button onClick={()=>{
                
                const user = {
                    name: localName,
                    value: "hello",
                    email: "abc@gmail.com"
                }                
                dispatch(updateName(user))
            }}>Update Name</button>
        </div>
    </div>
  );
}

export default Counter;
