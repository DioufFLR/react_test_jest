import {render, screen} from '@testing-library/react';
import Calculator from "../components/Calculator/Calculator";
import expect from "expect";


describe('<Calculator />', () =>
{
    // Utiliser beforeEach pour ne pas avoir besoin de rappeler le render a chaque tests
    // beforeEach(() =>
    // {
    //     render(<Calculator/>)
    // })

    it("has 'Calculator' displayed somewhere", () =>
    {
        render(<Calculator/>)
        const textElements = screen.getAllByText('Calculator');
        expect(textElements[0].textContent).toBe('Calculator')
    });
    it('has a h1 that contains calculator', () =>
    {
        render(<Calculator/>)
        const titleElement = screen.getByRole('heading', {level: 1})
        expect(titleElement.textContent).toBe('Calculator')
    });

    it('perform 0+0 by default', () =>
    {
        render(<Calculator/>)
        const {getInputA, getInputB, getOperator, getResult} = getCalculator();
        expect(getInputA()).toBe('0');
        expect(getInputB()).toBe('0');
        expect(getOperator()).toBe('+');
        expect(getResult()).toBe('0')
    });

    it('uses correctly the default values', () =>
    {
        render(<Calculator defaultA={ 12 } defaultB={ 10 } defaultOperator={ 'x' }/>)
        const {getInputA, getInputB, getOperator, getResult} = getCalculator();
        expect(getInputA()).toBe('12');
        expect(getInputB()).toBe('10');
        expect(getOperator()).toBe('x');
        expect(getResult()).toBe('120')
    });
});

const getCalculator = () =>
{
    return {
        getInputA: () => screen.getByTestId('inputA').value,
        getInputB: () => screen.getByTestId('inputB').value,
        getOperator: () => screen.getByTestId('operator').value,
        getResult: () => screen.getByTestId('result').textContent
    }

}