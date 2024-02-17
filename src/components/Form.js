import React, { useState } from 'react'

const Form = ({ user_id, transaction_id }) => {
    const [textInput, setTextInput] = useState('');
    const [error, setError] = useState('');
    const style = { color: "red" };

    const handleInputChange = (e) => {
        const { value } = e.target;
        if(value.length <= 100) {
            setTextInput(value);
            setError('');
        } else {
            setError('Text must be 100 characters or less.');
        }
    };

    const handleSubmit = () => {
        console.log(`User ID: ${user_id}`);
        console.log(`Transaction ID: ${transaction_id}`);
        console.log(`Text Input: ${textInput}`);
    };

  return (
    <div>
        <label htmlFor="text-input">Enter text (100 characters max):</label>
        <input 
            type="text" 
            id="text-input"
            value={textInput}
            onChange={handleInputChange}
            style={{ borderColor: error ? 'red' : '' }}
        />
        {error && <p style={ style }>{error}</p>}
        <button onClick = {handleSubmit}>Submit</button>
    </div>
  )
}

export default Form