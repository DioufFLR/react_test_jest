import {divide, multiply, substract, sum} from "../../utils/math-functions";
import {useState} from "react";

const OPERATORS = ['+', '-', 'x', '/']


const Calculator = ( {defaultB, defaultA, defaultOperator} ) =>
{
    const [inputValueA, setInputValueA] = useState(!defaultA || isNaN(defaultA) ? 0 : Number(defaultA));
    const [inputValueB, setInputValueB] = useState(!defaultB || isNaN(defaultB) ? 0 : Number(defaultB));
    const [operator, setOperator] = useState(OPERATORS.includes(defaultOperator) ? defaultOperator : '+')

    const getResult = () =>
    {
        switch (operator) {
            case '+':
                return sum(inputValueA, inputValueB)
            case '-':
                return substract(inputValueA, inputValueB)
            case 'x':
                return multiply(inputValueA, inputValueB)
            case '/':
                return divideSafely(inputValueA, inputValueB)
            default:
                return 'No operator provided'
        }
    }

    const divideSafely = ( a, b ) =>
    {
        try {
            return divide(a, b)
        } catch (error) {
            return error.message;
        }
    }

    const renderInputA = () =>
    {
        return (
            <input type="number"
                   value={ inputValueA }
                   onChange={ ( e ) => setInputValueA(e.target.value ? Number.parseFloat(e.target.value) : 0) }
            />
        )
    }

    const renderInputB = () =>
    {
        return (
            <input type="number"
                   value={ inputValueB }
                   onChange={ ( e ) => setInputValueB(e.target.value ? Number.parseFloat(e.target.value) : 0) }
            />
        )
    }

    const renderSelectBox = () =>
    {
        return <div>
            <select value={ operator } onChange={ ( e ) => setOperator(e.target.value) }>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="x">x</option>
                <option value="/">/</option>
            </select>
        </div>
    }

    return (
        <>
            <h1 style={ {marginBottom: 40} }>Calculator</h1>
            { renderInputA() }
            { renderSelectBox() }
            { renderInputB() }
            <h2 style={ {marginTop: 20} }>Result</h2>
            { getResult() }
        </>

    );
};

export default Calculator;