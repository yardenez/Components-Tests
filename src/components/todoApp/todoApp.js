import React, {useState } from 'react';
import TodoItemV2 from './todoItem';

function TodoAppV2(){
    const initialItems = [{title:"Reach 5M",done:false}];

    const [items,setItems]=useState(initialItems);

    const handleAddItem=(e)=>{
        e.preventDefault();
        const inputElem= e.target.elements[0];
        const newItemTitle= inputElem.value;
        if(newItemTitle!==''){
            const newItem={title:newItemTitle, done:false};
            items.push(newItem);
            setItems([...items]);
        }
    }

    const handleRemoveItem =(itemIdx)=>{
        items.splice(itemIdx,1)
        setItems([...items]);
    }

    const todoItems = items.map((item,index) =>{
        return (<div key={item.title} className="display-items-inline">
            <TodoItemV2 done={item.done} title={item.title}></TodoItemV2>
            <button data-testid='remove-btn' onClick={()=>handleRemoveItem(index)}>🗑</button>
    </div>)
    });

    return(<div data-testid='todo-app'>
        <div data-testid='todo-items-list' >{todoItems}</div>
        <form onSubmit={handleAddItem}>
            <input data-testid='add-btn-input' type="text"></input>
            <button data-testid="add-btn" type="submit">Add Item</button>
        </form>
    </div>)
}

export default TodoAppV2;
