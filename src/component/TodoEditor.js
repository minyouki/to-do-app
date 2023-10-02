import { useState, useRef } from 'react';
import './TodoEditor.css';

const TodoEditor = ({ onCreate }) => {
	const [content, setContent] = useState("");
	const inputRef = useRef();	//입력 폼 제어할 객체

	const onSubmit = () => {
		//빈 입력 방지
		if (!content){	//빈 문자열을 입력했으면
			inputRef.current.focus();	//inputRef가 current로 저장한 값에 focus 하고 종료
			return;
		}
		onCreate(content);
		setContent(""); //content 초기화
	}

	const onChangeContent = (e) => {
		setContent(e.target.value);
	}

	const onKeyDown = (e) => {
		if (e.keyCode == 13){
			onSubmit();
		}
	}

	return (
		<div className='TodoEditor'>
			<h4>새로운 Todo 작성하기 🖋</h4>
			<div className='editor-wrapper'>
				<input
					ref={inputRef}	//inputRef의 current 값으로 이 요소 저장
					value={content}
					onChange={onChangeContent}
					onKeyDown={onKeyDown}
					placeholder='새로운 todo...'
				/>
				<button onClick={onSubmit}>추가</button>
			</div>
		</div>
	);
}

export default TodoEditor;
