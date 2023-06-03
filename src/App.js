import './App.css';
import Sidebar from './Sidebar';
import ChatComponent from './ChatComponent';
function App() {
  return (
    <div className="app">
      <div className='app__body'>
        {/*Sidebar*/}
        <Sidebar />
        {/*Chat Componenet*/}
        <ChatComponent />
      </div>
    </div>
  );
}

export default App;
