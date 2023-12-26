function TodoItem(props){
    const activityArr = props.activityArr;
    const setactivityArr= props.setactivityArr;

    function handledelete(deleteid){
        var tempArr =activityArr.filter(function(item){
         if(item.id === deleteid){
            return false
         }else{
            return true
         }

        })
        setactivityArr(tempArr);
    }

    return(
        <div className="flex justify-between">
            <p>{props.index+1}.{props.activity}</p>
            <button onClick={()=>handledelete(props.id)} 
            className=" text-red-500">Delete</button>
        </div>
        
    )
}

export default TodoItem;