import ClickEvent from "../03_clickEvents";
import { render, screen } from '@testing-library/react';

const testClickMock = jest.fn();

describe('Function 2', () => {
  it('click check', () => {
    render(<ClickEvent testClick={testClickMock} />);
    const testNode = screen.getByTestId('click-button');

    testNode.click();
    expect(testClickMock).toHaveBeenCalled();

    testNode.click();
    expect(testClickMock).toHaveBeenCalled();
  });
});