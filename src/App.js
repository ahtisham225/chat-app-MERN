import './App.css';
import Sidebar from './Sidebar';
import ChatComponent from './ChatComponent';
import { useEffect,useState } from 'react';
import Pusher from 'pusher-js';
import axios from './Axios';
function App() {
  
  const [messages, setMessages] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    setName(prompt("Please enter your name"));
    },[]);
  
  
  useEffect(() => {
    
  // const person = prompt("Please enter your name", "Harry Potter");
    axios.get('/api/v1/messages/sync')
    .then(response=>{
      setMessages(response.data);
    }
    );
  },[]);

  
  useEffect(() => {
       // Enable pusher logging - don't include this in production
    // Pusher.logToConsole = true;

    const pusher = new Pusher('b116b186e57ff1cb2a55', {
      cluster: 'mt1'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(data) {
      // alert(JSON.stringify(data));
      setMessages([...messages,data]);
    });
    return ()=>{
      channel.unbind_all();
      channel.unsubscribe();
    };
    },[messages]);

    return (
    <div className="app">
      <div className='app__body'>
        {/*Sidebar*/}
        <Sidebar />
        {/*Chat Componenet*/}
        <ChatComponent messages={messages} name={name}/>
      </div>
    </div>
  );
}

export default App;
