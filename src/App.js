import {ChatEngine} from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />


    return(
        <ChatEngine
        height = "100vh"
        projectID="6851fa0e-879a-4849-a754-d7bdb8a130a7"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed = {(chatAppProps)=> <ChatFeed{...chatAppProps}/> }
        />
    );
}

export default App;