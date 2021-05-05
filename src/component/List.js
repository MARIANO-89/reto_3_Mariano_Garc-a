import React, { useState } from 'react';
import Task from './task';
export default function List({ title, deleteList }) {
    const [task, setTask] = useState('');

    const [tasks, setTasks] = useState([]);

    const addTask = () => {
        let newTasks = [...tasks];
        newTasks.push(task);

        setTasks(newTasks);
    };

    const deleteTask = (index) => {
        let deleteTasks = [...tasks];
        setTasks(
            deleteTasks.filter(function (task, i) {
                return i !== index;
            })
        );
    };

    return (
        <div className='card list'>
            <div className='lista'>
                <h2 className='h2'>{title}</h2>
                <button className='btn btn-danger' onClick={deleteList}>
                    Borrar Lista
                </button>
            </div>
            <div className='list__header'>
                <textarea
                    className='list__textarea'
                    value={task}
                    onChange={function (event) {
                        setTask(event.target.value);
                    }}
                ></textarea>
                <button className='btn btn-success' onClick={addTask}>
                    Agregar
                </button>
            </div>
            {tasks.map((task, index) => {
                return (
                    <Task
                        deleteTask={function () {
                            deleteTask(index);
                        }}
                        key={index}
                        text={task}
                    ></Task>
                );
            })}
        </div>
    );
}
