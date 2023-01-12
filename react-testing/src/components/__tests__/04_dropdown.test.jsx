import { fireEvent, render, screen } from '@testing-library/react';
import DropdownEvent from '../04_dropdowns';

describe('Function 2', () => {
  render(<DropdownEvent />);
  it('click check', () => {
    expect(screen.getByText('Choose a car: Volvo')).toBeInTheDocument();
    fireEvent.change(screen.getByTestId('car-dropdown'), {
      target: { value: 'Saab' },
    });
    let options = screen.getAllByTestId('select-option');

    expect(options[0].selected).toBeFalsy();
    expect(options[1].selected).toBeTruthy();
    expect(options[2].selected).toBeFalsy();

    // fireEvent.click(screen.getByText('Saab'));
    expect(screen.getByText('Choose a car: Saab')).toBeInTheDocument();
  });
});
