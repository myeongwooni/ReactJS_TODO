import React from 'react';
import './ToDoListTemplate.css';

const ToDoListTemplate = ({form, children}) => {
    return(
        <main className="todo-list-template">
            <div className="title">
                ♡ To Do ♡
            </div>
            <section className="form-wrapper">
                {form}
            </section>
            <section className="todos-wrapper">
                {children}
            </section>
        </main>
    );
};

export default ToDoListTemplate;