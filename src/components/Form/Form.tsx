import styles from './Form.module.css'
import store from '../../store/todoStore';
import {observer} from 'mobx-react';
import {IoIosAdd} from "react-icons/io";
import React, {useState} from "react";

const Form: React.FC = observer(() => {

    const [values, setValues] = useState<string>('');

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        store.addTodo(values);
        setValues('');
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input
                className={styles.input}
                value={values}
                onChange={handleOnChange}
                type="text"
                name="title"
                placeholder="Create a new todo"
                required
            />
            <button className={styles.button} type="submit">
                <IoIosAdd color="white" size={50}/>
            </button>
        </form>
    );
});

export default Form;