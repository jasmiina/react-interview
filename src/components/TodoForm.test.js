import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import TodoForm from './TodoForm';

describe('TodoForm-component', () => {

  test('renders inputfield as enabled', () => {
    render(<TodoForm />);

    const inputField = screen.getByRole('textbox');

    expect(inputField).toBeEnabled();
  })

  test('takes correct input', () => {
    render(<TodoForm />);

    const inputField = screen.getByRole('textbox');
    userEvent.type(inputField, 'test');

    expect(inputField).toHaveValue('test');
  });

});