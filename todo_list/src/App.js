import { useState } from 'react';
import { useSelector, useDispatch, Provider } from 'react-redux';
import './App.css';
import { Form } from './components/Form/Form';
import { ToDoList } from './components/ToDoList/ToDoList';
import { store } from './redux/store';
import { addTodo } from './redux/actions/todosActions';

import { Footer } from './components/Footer/Footer';
function App() {
  const [items, setItem] = useState([]);
  const [inputValue, setValue] = useState('');
  const [ifShow, setShow] = useState(false);

  const todos = useSelector((state) => state.todosReducer.todos);

  const dispatch = useDispatch();

  const addNewTodo = (text) => {
    console.log(text);
    if (text.replace(/\s+/g, '')) {
      dispatch({ type: 'ADD_TODO', text: text });
      setValue('');
    } else {
      alert('Enter something...');
      setValue('');
    }
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const throwAway = (idToFind) => {
    dispatch({ type: 'DELETE', id: idToFind });
  };

  const complete = (idToFind) => {
    dispatch({ type: 'COMPLETE', id: idToFind });
  };

  const showDate = (idToFind) => {
    dispatch({ type: 'SHOW_DATE', id: idToFind });
  };

  const deleteAll = () => {
    dispatch({ type: 'DELETE_ALL' });
  };
  const completeAll = () => {
    dispatch({ type: 'COMPLETE_ALL' });
  };

  // const ifBtnShow = () => {
  //   setShow(false);
  //   items.forEach((el) => {
  //     if (el.checked === true) {
  //       setShow(true);
  //     }
  //   });
  // };

  const check = (idToFind) => {
    dispatch({ type: 'CHECK', id: idToFind });
  };

  return (
    <Provider store={store}>
      <div className='App w-100'>
        <Form
          onClick={() => addNewTodo(inputValue)}
          onChange={onChange}
          text='Add'
          value={inputValue}
        />
        <ToDoList
          items={todos}
          throwAway={throwAway}
          complete={complete}
          showDate={showDate}
          check={check}
        />
        <Footer ifShow={true} deleteAll={deleteAll} completeAll={completeAll} />
      </div>
    </Provider>
  );
}

export default App;
