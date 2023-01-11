import { render, screen } from '@testing-library/react';
import React from 'react';
import DisplayComponent from '../01_display';

describe('TestID', () => {
  it('true', () => {
    render(<DisplayComponent showTitle={true} />);
    const titleNode = screen.getByTestId('title-text');
    expect(titleNode).toBeInTheDocument();
    expect(titleNode.classList).toContain('title');
  });
});

describe('TestID2', () => {
  it('false', () => {
    render(<DisplayComponent showTitle={false} />);
    let found = false;
    try {
      screen.getByTestId('title-text');
      found = true;
    }
    catch (err) {
      
    }
  
    expect(found).toEqual(false);
  });
});
