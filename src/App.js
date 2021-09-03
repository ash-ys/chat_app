import {ChatEngine} from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {
    return(
        <ChatEngine
        height = "100vh"
        projectID="6851fa0e-879a-4849-a754-d7bdb8a130a7"
        userName="Ash"
        userSecret="123123"
        renderChatFeed = {(chatAppProps)=> <ChatFeed{...chatAppProps}/> }
        />
    );
}

export default App;