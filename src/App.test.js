import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('it renders without crash', () => {
  const app =render(<App/>);
  expect(app).toBeDefined;
});
