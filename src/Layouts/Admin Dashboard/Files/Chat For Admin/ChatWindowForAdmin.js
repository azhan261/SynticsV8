import { ChatEngine } from 'react-chat-engine';
import LoginChatForAdmin from "./LoginChatForAdmin";
import ChatFeed from '../../../../Views/Syntics Chat/ChatFeed';
//import './App.css';
import "./ChatStyle.css"


function ChatWindowForAdmin() {
    
    const projectID = 'e65fc003-4b11-47a9-84e9-72a212dc728e';
    if (!localStorage.getItem('usernameAdmin')) return <LoginChatForAdmin />;

    return (
      <ChatEngine
        height="100vh"
        projectID={projectID}
        userName={localStorage.getItem('usernameAdmin')}
        userSecret={localStorage.getItem('passwordAdmin')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      />
    );
  };

export default ChatWindowForAdmin
