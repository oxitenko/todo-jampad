import {observer} from 'mobx-react';
import React, {useEffect, useState} from 'react';
import store from '../../store/todoStore';
import styles from './ToDoList.module.css'
import Form from "../Form/Form";
import ToDoItem from "../ToDoItem/ToDoItem";
import Counter from "../Counter/Counter";
import {fetchData} from "../../api/api";
import Loader from "../Loader/Loader";
import Filter from "../Filter/Filter";
import {IToDo} from "../../store/todoStore";

const TodoList: React.FC = observer(() => {

    const [status, setStatus] = useState<'idle' | 'loading' | 'error' | 'success'>('idle');
    const [error, setError] = useState<string | null>(null);
    const [currentFilter, setCurrentFilter] = useState<string>('all');

    // Получаем тудушки с сервера
    const getTodos = async (): Promise<void> => {
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

    // Фильтруем тудушки по типу
    function filterToDo(type: string, todos: IToDo[]):IToDo[] {
        switch (type) {
            case "all":
               return todos
            case "active":
               return todos.filter(item => !item.completed);
            case "completed":
               return todos.filter(item => item.completed);
            default:
                return todos
        }
    }

    // Меняем состояние фильтра
    const handleFilterChange = (filter: string) => {
        setCurrentFilter(filter);
    }

    return (
        <section className={styles.todo}>
            <h1 className={styles.title}>TODO</h1>
            <Form/>
            <ul className={styles.list}>
                {status === 'loading' && <Loader/>}
                {status === 'error' && <p className={styles.error}>{error}</p>}
                {status === "success" &&
                   filterToDo(currentFilter, store?.todos).map((item) => {
                        return (
                            <ToDoItem key={item.id} item={item}/>
                        );
                    })}
            </ul>
            <Counter/>
            <Filter currentFilter={currentFilter} onFilterChange={handleFilterChange} />
        </section>
    );
});

export default TodoList;