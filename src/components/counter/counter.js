import React, {useState } from 'react';


function Counter(){
    const [counter, setCounter]= useState(0);

    return (<div>
            <span data-testid="count">{counter}</span>
            <div className="display-items-inline" >
                <button data-testid="add-button" className="add-button" onClick={()=>setCounter(counter+1)}>+ </button>
                <button data-testid="substract-button" className="substract-button" onClick={()=>setCounter(counter-1)}> - </button>
            </div>
        </div>
    )
}

export default Counter;