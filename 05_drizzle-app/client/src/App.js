import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import ReadString from './ReadString';
import SetString from './SetString';

function App(props) {

  const [loading, setLoading] = useState(true);
  const [drizzleState, setDrizzleState] = useState(null);

  useEffect(()=>{
    const { drizzle } = props;

    const unsubscribe = drizzle.store.subscribe(()=>{

      console.log("drizzle in app = ",drizzle);
      const drizzleState = drizzle.store.getState();
      console.log("drizzle state in app = ",drizzleState);
      // check to see if it's ready, if so, update local component state
      if (drizzleState.drizzleStatus.initialized) {
        setDrizzleState(drizzleState);
        setLoading(false);
        
        //this.setState({ loading: false, drizzleState });
      }

    });

    return ()=>{
      unsubscribe();
    }
  },[]);

  if (loading) return "Loading Drizzle...";
  return (
    <div className="App">
      <ReadString
        drizzle={props.drizzle}
        drizzleState={drizzleState}
      />
      <SetString
          drizzle={props.drizzle}
          drizzleState={drizzleState}
        />
    </div>
  );

}

export default App;
