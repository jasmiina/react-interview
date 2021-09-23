import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import TodoItem from './TodoItem';

describe('TodoItem-component', () => {

  test('renders the item as complete when it is set complete', () => {
    render(<TodoItem completionStatus={true} />);

    const icon = screen.getByTestId('complete-svg');
    const itemName = screen.getByRole('heading');

    // Both icon and name should show the current status, so test both
    expect(itemName).toHaveClass('h3 complete');
    expect(icon).toBeInTheDocument();
  });

  test('renders the item as incomplete when it is set incomplete', () => {
    render(<TodoItem completionStatus={false} />);

    const icon = screen.getByTestId('incomplete-svg');
    const itemName = screen.getByRole('heading');

    expect(itemName).toHaveClass('h3 incomplete');
    expect(icon).toBeInTheDocument();
  });

});