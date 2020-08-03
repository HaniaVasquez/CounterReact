import React, {useState} from 'react';
import PropTypes from 'prop-types';

const CounterFunction = ({ value, subtitle }) => {
    //Hooks (normalmente llamada con "Use" al inicio)
    const [ counter, setCounter ]= useState(value);

    //handleAdd
    const handleAdd =(e)=>{
        setCounter(counter +1)
        //Otra manera
        // setCounter((c)=>c+1);
    }
    const handleReset =(e)=>{
        setCounter(value)
    }
    const handleSubtract =(e)=>{
        setCounter(counter -1)
    }

    return (
        <>
            <h1>CounterApp</h1>
            <p>{counter}</p>

            <button onClick={handleAdd}>+1</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleSubtract}>-1</button>
        </>
    );
}
CounterFunction.propTypes = {
    value: PropTypes.number.isRequired,
}

CounterFunction.defaultProps = {
    subtitle: 'Im a subtitle'
}
export default CounterFunction;