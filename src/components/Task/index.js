import React from "react";
import './task.css';

//task
import { FaEdit, FaWindowClose } from 'react-icons/fa';

export default function Task(props){
    return (
        <ul className="tarefas">
            {props.task.map((tarefa, index) => (
                <li key={tarefa}>
                    {tarefa}
                    <span>
                        <FaEdit onClick={e => props.handleEdit(e, index)} className="edit" />
                        <FaWindowClose onClick={e => props.handleDelete(e, index)} className="delete" />
                    </span>
                </li>                        
            ))}
        </ul>        
    );
}
