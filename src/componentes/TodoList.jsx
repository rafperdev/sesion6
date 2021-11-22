import React from "react";
import { TodoItem } from "./TodoItem";

export function TodoList({ lista }) {
    return (
        <ul>
            {lista.map((li) => (
                <TodoItem key={li.id} lista={li} />
            ))}
        </ul>
    )
}