import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NumberOfEvents from "../components/NumberOfEvents";
import { act } from 'react-dom/test-utils';

describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsComponent;
    beforeEach(() => {
        NumberOfEventsComponent = render(<NumberOfEvents setNumberOfEvents={() => { }} />);
    });

    test("contains element with role 'textbox'", () => {
        const numberTextBox = NumberOfEventsComponent.getByRole('textbox');
        expect(numberTextBox).toBeInTheDocument();
    });

    test('32 events are rendered as default', () => {
        const numberTextBox = NumberOfEventsComponent.getByRole('textbox');
        expect(numberTextBox).toHaveValue(32); // Use number 32 instead of string '32'
    });

    test('value of number of events updates correctly when user types in textbox', async () => {
        const numberTextBox = NumberOfEventsComponent.getByRole('textbox');
        const user = userEvent.setup();
        await act(async () => {
            await user.type(numberTextBox, '{backspace}{backspace}10');
        });
        expect(numberTextBox).toHaveValue(10);
    });
});
