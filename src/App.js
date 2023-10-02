import './App.css';
import Header from './component/Header';
import TodoEditor from './component/TodoEditor';
import TodoList from './component/TodoList';
import { useState, useRef } from "react";

function App() {
	const mockTodo = [
		{
			id: 0,
			isDone: false,
			content: "react 공부",
			createDate: new Date().getTime()
		},
		{
			id: 1,
			isDone: true,
			content: "산책하기",
			createDate: new Date().getTime()
		},
		{
			id: 2,
			isDone: false,
			content: "송편 먹기",
			createDate: new Date().getTime()
		},
	]

	const [todo, setTodo] = useState(mockTodo);
	const idRef = useRef(3);

	const onCreate = (content) => {
		const newItem = {
			id: idRef.current,
			content,
			isDone: false,
			createDate: new Date().getTime(),
		}
		setTodo([newItem, ...todo]);
		idRef.current += 1;
	};

	const onUpdate = (targetId) => {
		setTodo(
			todo.map((item) =>
				item.id === targetId ? {...item, isDone : !item.isDone} : item
			)
		);
	};

	const onDelete = (targetId) => {
		setTodo(todo.filter((item) => item.id != targetId));
	}

	return (
		<div className="App">
			<Header />
			<TodoEditor onCreate={onCreate} />
			<TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
		</div>
	);
}

export default App;
