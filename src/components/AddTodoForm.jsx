import {useState} from "react";
function AddTodoForm(props){

    const activityArr = props.activityArr;
    const setactivityArr = props.setactivityArr;

    const[newactivity,setnewactivity] = useState("")

    function handlechange(event){
        setnewactivity(event.target.value)
    }

    function addActivity(){
        setactivityArr([...activityArr,{id:activityArr.length+1,activity:newactivity}])
        setnewactivity("")
    }

    return(
        <div className="flex flex-col">
            <h1 className="text-2xl font-medium">Manage Activities</h1>

            <div>
                <input value={newactivity} onChange={handlechange} 
                type="text" className="border border-black rounded bg-transparent p-1" 
                placeholder="Next activity"></input>

                <button onClick={addActivity} 
                className="bg-black text-white p-1 border rounded">Add</button>
            </div>   
        </div>

    )
}

export default AddTodoForm;