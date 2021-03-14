import { useContext, useEffect, useState } from "react";
import { DrizzleContext } from '@drizzle/react-plugin'; 

function ReadString() {

    const [dataKey, setDataKey] = useState(null);
    const drizzleData = useContext(DrizzleContext.Context)


    useEffect(()=>{
        const { drizzle } = drizzleData;
        const contract = drizzle.contracts.MyStringStore;

        // let drizzle know we want to watch the `myString` method
        const dataKey = contract.methods["myString"].cacheCall();

        // save the `dataKey` to local component state for later reference
        setDataKey(dataKey);
        //this.setState({ dataKey });
    })
    //console.log("read string props >> ",props);
    const { MyStringStore } = drizzleData.drizzleState.contracts;

    // using the saved `dataKey`, get the variable we're interested in
    const myString = MyStringStore.myString[dataKey];
    return (
        <div>
            <div>Hello Read String</div>
            <p>My stored string: {myString && myString.value}</p>
        </div>
    );
}

export default ReadString