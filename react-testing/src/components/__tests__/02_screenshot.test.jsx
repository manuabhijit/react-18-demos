import { render } from '@testing-library/react';
import React from 'react';
import SnapshotComponent from '../02_screenshot';

describe('Test: Special Mention component screenshot', () => {
  it('should render the Special Mention correctly', () => {
    const { container } = render(
        <SnapshotComponent/>
    );
    expect(container).toMatchSnapshot();
  });
});
