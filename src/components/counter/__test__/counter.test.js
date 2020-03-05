import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react'
import renderer from 'react-test-renderer';
import Counter from './../counter';

afterEach(cleanup);

describe('Counter tests', () => {
    
    test("displays zero as the initial count value", ()=>{
        const {getByTestId}=render(<Counter/>);
        expect(getByTestId("count")).toHaveTextContent("0"); 
    });
    
    test("increments count when add button clicked",()=>{
        const {getByTestId}=render(<Counter/>);
        fireEvent.click(getByTestId("add-button"));
        expect(getByTestId("count")).toHaveTextContent("1"); 
    });
    
    test("decrements count when substract button clicked",()=>{
        const {getByTestId}=render(<Counter/>);
        fireEvent.click(getByTestId("substract-button"));
        expect(getByTestId("count")).toHaveTextContent("-1"); 
    });

    /* Will probably be used more on E2E tests, and not for each componenet  */
    test("Counter matches snapshot",()=>{
        const counter= renderer.create(<Counter/>);
        let tree = counter.toJSON();
        expect(tree).toMatchSnapshot();
    });
})



