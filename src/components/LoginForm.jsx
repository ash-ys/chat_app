import {useState} from 'react';
import axios from 'axios';
const LoginForm = () => {
    const [username, setUsername]= useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        const authObject = {'Project-ID': "6851fa0e-879a-4849-a754-d7bdb8a130a7", 'User-Name': username, 'User-Secret': password};

        try{
            //username| password => chatengine -> give messages
            await axios.get('https://api.chatengine.io/chats', {headers: authObject});
            //works out -> logged in
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();
        }catch(error)
        //error-> try again
        
        
        
    }

    return (
        <div className= "wrapper">
            <div className= "form">
                <h1 className= "title">Chat Application</h1>
                <form onSubmit= {handleSubmit}>
                    <input type= "text" value={username} onChange={(e) => setUsername(e.target.value)} className = "input" placeholder= "Username" required/>
                    <input type= "password" value={password} onChange={(e) => setPassword(e.target.value)} className = "input" placeholder= "Password" required/>
                    <div align= "center">
                        <button type= "submit" className= "button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                </form>
            </div>
    )
}