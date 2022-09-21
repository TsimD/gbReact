import './Style/App.css';
import React, {useRef} from "react";
import Message from "./Message";


function App () {
  const [messageList, setMessageList] = React.useState([]);

  const [valueAuthor, setValueAuthor] = React.useState('');
  const [valueText, setValueText] = React.useState('');

  const handlerSubmit = (e) => {
    e.preventDefault();
    setMessageList(prevState => [...prevState, {
      author: valueAuthor,
      text: valueText,
    }])
    setValueAuthor('');
    setValueText('');
  }

  return (
      <div className='container'>
        <form className='form' onSubmit={handlerSubmit}>
          <input type="text" value={valueAuthor} onChange={(e) => setValueAuthor(e.target.value)}/>
          <input type="text" value={valueText} onChange={(e) => setValueText(e.target.value)}/>
          <button className='button' type='submit'>Добавить</button>
        </form>
        {
          messageList.map((message => {
            return (
                <div className="renderMessage">
                 <h3 className="message">{message.text}</h3>  <p className="author">от  {message.author}</p>
                </div>)
          }))
        }
      </div>


  );
}

export default App
;
