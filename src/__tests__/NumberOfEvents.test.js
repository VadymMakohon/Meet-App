import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NumberOfEvents from '../components/NumberOfEvents';
describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsComponent;
    beforeEach(() => {
        NumberOfEventsComponent = render(<NumberOfEvents setCurrentNOE={() => { }} />)
    })
    test('renders number of events text input', () => {
        const numberTextBox = NumberOfEventsComponent.queryByRole('textbox');
        expect(numberTextBox).toBeInTheDocument();
        expect(numberTextBox).toHaveClass('number-of-events-input');
    });
    test('default value of the input field is 32', () => {
        const numberTextBox = NumberOfEventsComponent.queryByRole('textbox');
        expect(numberTextBox).toHaveValue('32');
    });

    test('value changes accordingly when user types', async () => {
        const numberTextbox = NumberOfEventsComponent.queryByRole('textbox');
        await userEvent.type(numberTextbox, "{backspace}{backspace}10");
        expect(numberTextbox.value).toBe("10");
    });
})