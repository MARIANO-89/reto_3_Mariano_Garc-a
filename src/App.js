import React, { useState } from 'react';
import List from './component/List';

export default function App() {
    const [lists, setLists] = useState([]);
    const [title, setTitle] = useState('');

    const addList = () => {
        let newList = [...lists];
        newList.push({ title, List });

        setLists(newList);
    };
    const deleteList = (index) => {
        let deleteList = [...lists];
        setLists(
            deleteList.filter(function (lists, i) {
                return i !== index;
            })
        );
    };

    return (
        <div>
            <div className='geeks'>
                <h1 className='h1'>Reto 3 </h1>
                <h1 className='h1__m'>
                    <span> Geekshub Academy </span>
                </h1>
            </div>

            <div className='input'>
                <input
                    placeholder='Introduce el título'
                    className='Title'
                    value={title}
                    onChange={function (event) {
                        setTitle(event.target.value);
                    }}
                ></input>
                <button className='btn btn-info' onClick={addList}>
                    {' '}
                    Agregar Lista
                </button>
            </div>
            <div className='lists'>
                {lists.map(({ title, List }, index) => {
                    return (
                        <List
                            key={index}
                            title={title}
                            deleteList={function () {
                                deleteList(index);
                            }}
                            key={index}
                            text={List}
                        />
                    );
                })}
            </div>
        </div>
    );
}
