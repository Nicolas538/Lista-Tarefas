import React from "react";

//form
import './form.css'
import { FaPlus } from 'react-icons/fa';

export default function Form(props){
    return (
        <form onSubmit={props.handlerSubmit} action="#" className="form">
            <input type="text" onChange={props.handleChange} value={props.newTask} />
            <button type="submit"><FaPlus /></button>
        </form>        
    );
}