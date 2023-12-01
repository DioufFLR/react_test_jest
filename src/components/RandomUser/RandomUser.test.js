import {render, screen, fireEvent} from "@testing-library/react";
import {RandomUser} from "./RandomUser";

describe('<RandomUser />', () =>
{
    it('loads user when clicking on the button', async () =>
    {
        render(<RandomUser />)
        const button = screen.getByRole('button')
        fireEvent.click(button)
        const titleElement = await screen.findByRole('heading', {level: 2})
        expect(titleElement).toBeDefined();
    });
});