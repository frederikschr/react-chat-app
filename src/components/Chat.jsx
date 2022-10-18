import '../styles/Chat.scss';
import InputBar from './InputBar';
import MessageArea from './MessageArea';
import { useRealtimeMessages } from '../firebase/db/messages';

const Chat = () => {

  const messages = useRealtimeMessages();

  return (
    <div className="chat">

      <h1>Chat</h1>
  
      <MessageArea messages={messages}/>

      <InputBar amountOfMessages={messages.length}/>

    </div>
  )
}

export default Chat;



