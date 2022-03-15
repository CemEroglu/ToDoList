import React from 'react';
import { useSelector } from 'react-redux';

const Summary = () => {
	const numberOfTodos = useSelector((state) =>
		state.todos.length
	);
	const todos = useSelector((state) =>
		state.todos.filter((todo) => todo.completed === true)
	);

	return <h4 className='mt-3'>{todos.length} tasks completed! {numberOfTodos- todos.length} left to complete all... </h4>;
};

export default Summary;
