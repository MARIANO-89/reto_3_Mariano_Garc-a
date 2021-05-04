import React from 'react';

export default function Task({ text, deleteTask }) {
    return (
        <div className='task'>
            <p>{text}</p>
            <button className='btn btn-outline-danger' onClick={deleteTask}>
                Borrar
            </button>
        </div>
    );
}
