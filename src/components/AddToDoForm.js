import React, { useState } from 'react';

const AddTodoForm = () => {
    const [value, setValue] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        console.log('New Task added: ' + value);
    };

    return (
        <form onSubmit={onSubmit} className='form-inline mt-3 mb-3'>
            <label className='sr-only'>Task Name: </label>
            <input
                type='text'
                className=''
                placeholder='Add a new task!'
                value={value}
                onChange={(event) => setValue(event.target.value)}
            ></input>

            <button type='submit' className=''>
                Submit
            </button>
        </form>
    );
};

export default AddTodoForm;