import { observer } from 'mobx-react';
import React from 'react';
import store from '../../store/todoStore';
import styles from './ToDoList.module.css'
import Form from "../Form/Form";

const TodoList: React.FC = observer(() => {
    return (
        <section className={styles.todo}>
            <h1 className={styles.title}>TODO</h1>
            <Form/>
            <ul className={styles.list}>
                {store.todos.map((item) => {
                    return (
                        <li>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
});

export default TodoList;