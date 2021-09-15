import React, {useState, useEffect} from "react";

const Calculator = () => {
    const [view, setView] = useState(' ');
    let firstValue = '';
    let secondValue = '';
    let operation = '';

    const handleClear = () => {
        setView(' ');
        firstValue = '';
        secondValue = '';
    };

    const handleValue = (val) => {
        let value = view + val;
        setView(value);
    };

    const handlePlus = () => {
        firstValue = '' ? firstValue = view : secondValue = view;
        operation = '+';
        setView('');
    };

    return (
        <div className="calculator">
            <table className="table">
                <tr>
                    <td colspan="2" className="view">{view}</td>
                    <td onClick={handleClear}>C</td>
                    <td onClick={handlePlus}>+</td>
                </tr>
                <tr>
                    <td onClick={handleValue(7)}>7</td>
                    <td>8</td>
                    <td>9</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                    <td>*</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>/</td>
                </tr>
                <tr>
                    <td colspan="2">0</td>
                    <td>=</td>
                    <td>,</td>
                </tr>
            </table>
        </div>
    );
}

export default Calculator;