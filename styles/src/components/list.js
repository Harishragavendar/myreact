import React, { Component } from 'react';

export default function List(){
    const fruits = ["Mango","Orange","Apple"];
    const display = fruits.map((name)=>{return <li>{name}</li>});
    return (
        <>
            <ul>{display}</ul>
        </>
    )
}