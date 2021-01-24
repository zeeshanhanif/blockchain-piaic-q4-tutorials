import { useSelector } from "react-redux";

function TodoList() {

    const todoList = useSelector((state)=>{
        console.log("todo list date ",state);
        return state.todoReducer.todos
    })

    const name = useSelector((state)=>{
        return state.counterReducer.user.name
    })
    return (
      <div >
          <div>Todo List</div>
          <div>User Name {name}</div> 
          {
              todoList.map((item)=>(
                <div key={item.title}>{item.title}</div> 
              ))
          }
      </div>
    );
  }
  
  export default TodoList;
  