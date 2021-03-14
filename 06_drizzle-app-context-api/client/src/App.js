import logo from './logo.svg';
import './App.css';
import { useContext } from 'react';
import { DrizzleContext } from '@drizzle/react-plugin'; 
import ReadString from './ReadString';

function App() {
  console.log("in app DrizzleContext = ",DrizzleContext)
  const drizzleData = useContext(DrizzleContext.Context)
  console.log("in app drizzleData = ",drizzleData)
  


  if(!drizzleData.initialized) return "Drizzle Loading...";
  return (
    <div>
      <div>Hello World</div>
      <ReadString />
    </div>
  );
}

export default App;
