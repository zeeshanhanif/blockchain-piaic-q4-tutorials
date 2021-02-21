import { useSelector, useDispatch } from "react-redux";
import petListJson from '../pets.json';
import Adopters from "./Adopters";
import {adoptPet} from '../store/adoptSlice'

function PetList() {
    const address = useSelector((state)=>{
        return state.adoptReducer.address
    })
    const contract = useSelector((state)=>{
      return state.adoptReducer.contract
    })
    const adoptersList = useSelector((state)=>{
      return state.adoptReducer.adopters
    })

    const { adoptInProgress,adoptError,adoptErrorMessage } = useSelector((state)=>{
      return state.adoptReducer; 
    })

    const dispatch = useDispatch();

  return (
    <div>
      <div>
        Hello PetList - Address {address}
      </div>
      <Adopters />
      {
        adoptInProgress?
        <div>
          <img src="images/progress.gif" style={{width: "50px"}}/>
        </div> : null
      }
      {
        adoptError?
        <div>
          <p style={{color: "red"}}>{adoptErrorMessage}</p>
        </div> : null
      }

      <br/>
      {   petListJson.map((item)=>(
          <div key={item.id} style={{border: "1px solid black", display: "inline-block", padding: "20px", margin: "10px"}}  >
            <div >
              <h3 >{item.name}</h3>
            </div>
            <div>
              <img alt="140x140" src={item.picture} style={{width:"150px"}} />
              <br/><br/>
              <strong>Breed</strong>: <span >Golden Retriever</span><br/>
              <strong>Age</strong>: <span >3</span><br/>
              <strong>Location</strong>: <span >Warren, MI</span><br/><br/>
              <div> {adoptersList[item.id]}  </div>
              {
                adoptersList[item.id] =="0x0000000000000000000000000000000000000000" ? 
                <button type="button" onClick={async()=>{
                  console.log("id = ",item.id);
                  
                  dispatch(adoptPet(item.id));


                  /*
                  const result = await contract.methods.adopt(item.id).send({from: address});
                  console.log("after adopt result = ",result);
  
                  const adopterList = await contract.methods.getAdopters().call();
                  console.log("adopter list ",adopterList);
                    */
                }} >Adopt</button>:
                <div>Already Adopted</div>
              }
              
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default PetList;
