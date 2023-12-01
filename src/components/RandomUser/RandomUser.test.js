import {render, screen, fireEvent} from "@testing-library/react";
import {RandomUser} from "./RandomUser";
import axios from "axios";

jest.mock('axios');

describe('<RandomUser />', () =>
{
    it('loads user when clicking on the button', async () =>
    {
        render(<RandomUser/>)
        const button = screen.getByRole('button');
        axios.get.mockResolvedValueOnce({data: MOKE_USER_RESPONSE})
        fireEvent.click(button)
        const titleElement = await screen.findByRole('heading', {level: 2})
        expect(titleElement.textContent).toBe('Nora Pijnacker');
        screen.debug(titleElement)
    });
});

const MOKE_USER_RESPONSE = {
    "results": [{
        "gender": "female", "name": {"title": "Mrs", "first": "Nora", "last": "Pijnacker"}, "location": {
            "street": {"number": 4987, "name": "Kolderveense Bovenboer"}, "city": "Veltum", "state": "Gelderland",
            "country": "Netherlands", "postcode": "0695 KS",
            "coordinates": {"latitude": "35.7670", "longitude": "7.1379"},
            "timezone": {"offset": "+10:00", "description": "Eastern Australia, Guam, Vladivostok"}
        }, "email": "nora.pijnacker@example.com", "login": {
            "uuid": "b88f7fd4-d1fa-44b5-9513-367f6834ff73", "username": "blueduck483", "password": "angus1",
            "salt": "h8OsTw2u", "md5": "6355d0db4eb18d85441040412feab876",
            "sha1": "a7ff4d564f7dd03dee275ebb328e37ac249ae6ae",
            "sha256": "be065571c97057095048a1951427375cc801787b43ab39b954132c344f8fb95f"
        }, "dob": {"date": "1970-06-27T09:06:54.956Z", "age": 53},
        "registered": {"date": "2022-03-23T09:16:43.395Z", "age": 1}, "phone": "(0208) 292567", "cell": "(06) 88634796",
        "id": {"name": "BSN", "value": "96099585"}, "picture": {
            "large": "https://randomuser.me/api/portraits/women/39.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/39.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/39.jpg"
        }, "nat": "NL"
    }], "info": {"seed": "6becc2b7a508e5b7", "results": 1, "page": 1, "version": "1.4"}
}