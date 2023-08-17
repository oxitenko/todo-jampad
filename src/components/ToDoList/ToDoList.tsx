import {observer} from 'mobx-react';
import React, {useEffect, useState} from 'react';
import store from '../../store/todoStore';
import styles from './ToDoList.module.css'
import Form from "../Form/Form";
import ToDoItem from "../ToDoItem/ToDoItem";
import Counter from "../Counter/Counter";
import {fetchData} from "../../api/api";
import Loader from "../Loader/Loader";

const TodoList: React.FC = observer(() => {

    const [status, setStatus] = useState<'idle' | 'loading' | 'error' | 'success'>('idle');
    const [error, setError] = useState<string | null>(null);
    const getTodos = async () => {
        setStatus("loading")
        try {
            const data = await fetchData();
            store.fetchTodos(data);
            setStatus("success")
        } catch (e) {
            setStatus("error");
            setError(`Error: ${e}`)
        }
    }

    useEffect(() => {
        getTodos()
    }, []);

    return (
        <section className={styles.todo}>
            <h1 className={styles.title}>TODO</h1>
            <Form/>
            <ul className={styles.list}>
                {status === 'loading' && <Loader/>}
                {status === 'error' && <p className={styles.error}>{error}</p>}
                {status === "success" &&
                    store.todos?.map((item) => {
                        return (
                            <ToDoItem key={item.id} item={item}/>
                        );
                    })}
            </ul>
            <Counter/>
        </section>
    );
});

export default TodoList;