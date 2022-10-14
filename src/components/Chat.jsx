import '../styles/Chat.scss'
import InputBar from './InputBar';
import MessageArea from './MessageArea';
import { fetchMessagesRealtime } from '../firebase/db/messages';
import { useEffect, useState } from 'react';

const Chat = () => {

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchMessagesRealtime((fetchedMessages) => setMessages(fetchedMessages));
  }, [])

  return (
    <div className="chat">

      <h1>Chat</h1>
  
      <MessageArea messages={messages}/>

      <InputBar amountOfMessages={messages.length}/>

    </div>
  )
}

export default Chat;



