import './Style/App.css';
import Message from "./Message";

function App() {
  const text = "Hi. I'm text in props"
  return (
    <div className="App">
        <Message text={text} />
    </div>
  );
}

export default App;
