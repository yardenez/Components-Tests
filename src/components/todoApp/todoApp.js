import React, {useState } from 'react';
import TodoItemV2 from './todoItem';

function TodoAppV2(){
    const initialItems = [
        {title:"Reach 1M",done:true},
        {title:"Reach 5M",done:false}];

    const [items,setItems]=useState(initialItems);

    const handleAddItem=(e)=>{
        e.preventDefault();
        const inputElem= e.target.elements[0];
        const newItemTitle= inputElem.value;
        const newItem={title:newItemTitle, done:false};
        items.push(newItem);
        setItems([...items]);
    }

    const handleRemoveItem =(itemIdx)=>{
        items.splice(itemIdx,1)
        setItems([...items]);
    }

    const todoItems = items.map((item,index) =>{
        return (<div key={item.title} className="display-items-inline">
            <TodoItemV2 done={item.done} title={item.title}></TodoItemV2>
            <button onClick={()=>handleRemoveItem(index)}>🗑</button>
    </div>)
    });

    return(<div>
        {todoItems}
        <form onSubmit={handleAddItem}>
            <input type="text"></input>
            <button type="submit">Add Item</button>
        </form>
    </div>)
}

export default TodoAppV2;
