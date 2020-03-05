import React from 'react';
import { render, cleanup, fireEvent, getAllByTestId } from '@testing-library/react'
import renderer from 'react-test-renderer';
import TodoAppV2 from './../todoApp';

afterEach(cleanup);

describe("TodoApp tests",()=>{

    test('item is removed when trash icon is clicked',()=>{
        const {getAllByTestId, getByTestId} = render(<TodoAppV2/>);
        const removeBtn = getAllByTestId('remove-btn')[0];
        fireEvent.click(removeBtn);
        expect(getByTestId('todo-items-list').children.length).toBe(0);
        
    });

    describe('test add item flow',()=>{

        test('item is added to list when add button is clicked',()=>{
            const {getByTestId} = render(<TodoAppV2/>);
            const addBtn = getByTestId('add-btn');
            const inputForAdd = getByTestId('add-btn-input');
            fireEvent.change(inputForAdd,{target: {value: 'reach 2m'}});
            fireEvent.click(addBtn)
            expect(getByTestId('todo-items-list').children.length).toBe(2);
        });

        test('input is cleaned after adding an element',()=>{
            const {getByTestId} = render(<TodoAppV2/>);
            const addBtn = getByTestId('add-btn');
            const inputForAdd = getByTestId('add-btn-input');
            fireEvent.change(inputForAdd,{target: {value: 'reach 2m'}});
            fireEvent.click(addBtn);
            expect(inputForAdd.value).toBe('');
        });
    });
});