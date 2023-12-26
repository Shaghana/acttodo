import AddTodoForm from "./AddTodoForm.jsx"
import TodoList from "./TodoList.jsx"
import {useState} from "react"

function TodoContainer(){

    const [activityArr, setactivityArr] = useState([
        {
          id: 1,
          activity: "Go for a walk",
        },
        {
          id: 2,
          activity: "Have a breakfast",
        },
        {
          id: 3,
          activity: "Take a shower",
        },
      ]);

    return(
        <div className=" flex gap  gap-3 flex-wrap">
        {/* Add todolist */}
        <AddTodoForm  activityArr={activityArr} setactivityArr={setactivityArr}>
        </AddTodoForm>
        

        {/* Todolist */}
        <TodoList activityArr={activityArr} setactivityArr={setactivityArr}></TodoList>
        

      </div>
    )
}

export default TodoContainer;