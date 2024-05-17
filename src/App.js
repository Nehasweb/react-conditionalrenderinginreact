import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import usergreetings from './Components/usergreetings';
import greetings from './Components/greetings';

function App() {

const [isLoggedIn, setIsLoggedIn] = useState(false);
const [text, setText] = useState('Login');

  return (
    <div className="App">
      {isLoggedIn?<usergreetings name = "neha"/> : <greetings/>}
      
      <button onClick={() => {setIsLoggedIn(true); setText('Logged In')}}>{text}</button>
    </div>
  );
}

export default App;
