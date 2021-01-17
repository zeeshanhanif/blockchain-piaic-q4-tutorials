import { useSelector } from "react-redux";

function Info() {
    const mycoutner = useSelector((state)=>{
        return state.counter;
    })
    const name = useSelector((state)=>{
        return state.user.name
    })
  return (
    <div>
      <div>Hello Info</div>
      <div>Counter {mycoutner}</div>
      <div>Name: {name}</div>
    </div>
  );
}

export default Info;
