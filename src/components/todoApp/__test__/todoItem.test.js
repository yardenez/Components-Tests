import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react'
import TodoItemV2 from '../todoItem';

afterEach(cleanup);

describe("TodoItem tests",()=>{

    test("renders without strike when done is falsey",()=>{
        const {getByTestId} = render(<TodoItemV2 done={false} title="toStuff"/>);
        expect(getByTestId("todo-item").classList.contains('task-done')).toBe(false);
    });

    test("renders with strike when done is truthy",()=>{
        const {getByTestId} = render(<TodoItemV2 done={true} title="toStuff"/>);        
        expect(getByTestId("todo-item").classList.contains('task-done')).toBe(true);
    });

   /* note to myself: usually, we will prefer not to have 2 expect in one test.
   Here, we can seperate the functions so that one will only test first strike, and the second 
   one will stay as follows without first expect */
    test("item click toggle strike correctly",()=>{
        const {getByTestId} = render(<TodoItemV2 done={false} title="toStuff"/>);  
        const item = getByTestId('todo-item'); 
        fireEvent.click(item);
        expect(item.classList.contains('task-done')).toBe(true);
        fireEvent.click(item);
        expect(item.classList.contains('task-done')).toBe(false);
    });
});