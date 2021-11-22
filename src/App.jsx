import React, { useState, useRef } from "react";
import { Fragment } from "react/cjs/react.production.min";
import { TodoList } from "./componentes/TodoList";
import { v4 as uuidv4 } from "uuid";

export function App() {
    const taskRef = useRef();
    const [lista, setLista] = useState([{ id: 1, task: "Tarea 1", completed: false }]);

    const handleTaskAdd = () => {
        const task = taskRef.current.value;
        if (task === "") return;
        setLista((prev) => {
            return [...prev, { id: uuidv4(), task, completed: false }]
        })
        taskRef.current.value = "";
    }
    return (
        <Fragment>
            <input ref={taskRef} type="text" placeholder="Nueva tarea" />
            <button onClick={handleTaskAdd}>+</button>
            <button>-</button>
            <TodoList lista={lista} />
        </Fragment>
    );
}