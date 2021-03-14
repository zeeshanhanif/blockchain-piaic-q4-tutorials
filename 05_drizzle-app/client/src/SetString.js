import { useEffect, useState } from "react";

function SetString(props) {

    const [stackId, setStackId] = useState(null);
  
    const handleKeyDown = e => {
        // if the enter key is pressed, set the value with the string
        if (e.keyCode === 13) {
            setValue(e.target.value);
        }
    };

    const setValue = value => {
        const { drizzle, drizzleState } = props;
        const contract = drizzle.contracts.MyStringStore;
    
        // let drizzle know we want to call the `set` method with `value`
        const stackId = contract.methods["set"].cacheSend(value, {
          from: drizzleState.accounts[0]
        });
    
        // save the `stackId` for later reference
        setStackId(stackId);
        //this.setState({ stackId });
      };

    const getTxStatus = () => {
        // get the transaction states from the drizzle state
        const { transactions, transactionStack } = props.drizzleState;
    
        // get the transaction hash using our saved `stackId`
        const txHash = transactionStack[stackId];
    
        // if transaction hash does not exist, don't display anything
        if (!txHash) return null;
    
        console.log("Transaction hash = ", txHash);
        // otherwise, return the transaction status
        return `Transaction status: ${transactions[txHash] && transactions[txHash].status}`;
      };


      return (
        <div>
          <input type="text" onKeyDown={handleKeyDown} />
          <div>{getTxStatus()}</div>
        </div>
      );
}

export default SetString