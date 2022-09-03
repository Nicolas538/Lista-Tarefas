import React, { Component } from "react";
import './main.css';

import Form from './Form';
import Task from './Task';

export default class Main extends Component {
    state = {
        newTask: '',
        task: [],
        index: -1
    };

    componentDidMount(){
        const task = JSON.parse(localStorage.getItem('task')); 

        if(!task) return;

        this.setState({ task });
    }

    componentDidUpdate(prevProps, prevState){
        const { task } = this.state;  

        if(task === prevState.task) return;

        localStorage.setItem('task', JSON.stringify(task));
    }

    handlerSubmit = (e) => {
        e.preventDefault();
        let { newTask, index } = this.state;
        let { task } = this.state;
        newTask = newTask.trim();

        if(task.indexOf(newTask) !== -1) return;

        const newsTasks = [...task];

        if(index === -1){
            this.setState({
                task: [...newsTasks, newTask],
                newTask: ''
            });
        }else{
            newsTasks[index] = newTask;

            this.setState({
                task: [...newsTasks],
                index: -1,
                newTask: ''
            });
        }        
    }

    handleChange = (e) => {
        this.setState({
            newTask: e.target.value,
        });
    }

    handleEdit = (e, index) => {
        const { task } = this.state;       
        this.setState({
            index,
            newTask: task[index]
        });
    }

    handleDelete = (e, index) => {
        const { task } = this.state;
        const newsTasks = [...task];
        newsTasks.splice(index, 1);

        this.setState({
            task: [...newsTasks]
        });
    }   

    render(){
        const { newTask, task } = this.state;

        return (
            <div className="main">
                <h1>Lista de tarefas</h1>   

                <Form 
                    handlerSubmit={this.handlerSubmit}
                    handleChange={this.handleChange}
                    newTask={newTask}
                />             

                <Task 
                    task={task}
                    handleEdit={this.handleEdit}
                    handleDelete={this.handleDelete}
                 />
            </div>
        );
    }
}