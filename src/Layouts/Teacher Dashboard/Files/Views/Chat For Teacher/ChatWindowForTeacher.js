import { ChatEngine } from 'react-chat-engine';
import LoginChatForTeacher from "./LoginChatForTeacher";
import ChatFeed from '../../../../../Views/Syntics Chat/ChatFeed';
//import './App.css';
import "./ChatStyle.css"


function ChatWindowForTeacher() {
    
    const projectID = 'e65fc003-4b11-47a9-84e9-72a212dc728e';
    if (!localStorage.getItem('usernameTeacher')) return <LoginChatForTeacher />;

    return (
      <ChatEngine
        height="100vh"
        projectID={projectID}
        userName={localStorage.getItem('usernameTeacher')}
        userSecret={localStorage.getItem('passwordTeacher')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      />
    );
  };

export default ChatWindowForTeacher
