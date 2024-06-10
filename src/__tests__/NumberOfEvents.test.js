import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NumberOfEvents from '../components/NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
    test('renders number of events input', () => {
        render(<NumberOfEvents setCurrentNOE={() => { }} />);
        const numberTextBox = screen.getByRole('spinbutton');
        expect(numberTextBox).toBeInTheDocument();
        expect(numberTextBox).toHaveClass('number-of-events-input');
    });

    test('default value of the input field is 32', () => {
        render(<NumberOfEvents setCurrentNOE={() => { }} />);
        const numberTextBox = screen.getByRole('spinbutton');
        expect(numberTextBox).toHaveValue(32);
    });

    test('value changes accordingly when user types', async () => {
        render(<NumberOfEvents setCurrentNOE={() => { }} />);
        const numberTextBox = screen.getByRole('spinbutton');
        const user = userEvent.setup();
        await user.clear(numberTextBox);
        await user.type(numberTextBox, '10');
        expect(numberTextBox).toHaveValue(10);
    });
});
