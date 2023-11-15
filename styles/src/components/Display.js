import React from 'react';
import './Demo.css';

export default function Display() {
    const display=[{id:1,name:'sam',college:'skcet'},{id:2,name:'pam',college:'skct'}];
    const show=display.map((item)=> <li key={item.id}>{item.name}</li>)
    return (
        <div className='mystyle'>
            {show}
        </div>
    );
}

