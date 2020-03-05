import React, {useState } from 'react';

function TodoItemV2(props){
    const [isItemDone,setIsItemDone]=useState(props.done);
    const title = props.title;
    
    return <p data-testid="todo-item" className={ isItemDone ? "task-done" : null} 
            onClick={()=>setIsItemDone(!isItemDone)}>
           {title}
           </p>
}

export default TodoItemV2;