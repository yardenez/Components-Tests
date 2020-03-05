import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react'
import TodoItemV2 from '../todoItem';

afterEach(cleanup);

describe("TodoItem tests",()=>{

    /* Is it correct to test this basic render? or trust react? */
    test("renders without strike when done is falsey",()=>{
        const {getByTestId} = render(<TodoItemV2 done={false} title="toStuff"/>);
        expect(getByTestId("todo-item").classList.contains('task-done')).toBe(false);
    });

    test("renders with strike when done is truthy",()=>{
        const {getByTestId} = render(<TodoItemV2 done={true} title="toStuff"/>);        
        expect(getByTestId("todo-item").classList.contains('task-done')).toBe(true);
    });

    /*Is it better to seperate it into two different tests? 
    one for click when done, and another for click when not done */
    test("item click toggle strike correctly",()=>{
        const {getByTestId} = render(<TodoItemV2 done={false} title="toStuff"/>);  
        const item = getByTestId('todo-item'); 
        fireEvent.click(item);
        expect(item.classList.contains('task-done')).toBe(true);
        fireEvent.click(item);
        expect(item.classList.contains('task-done')).toBe(false);
    });
});