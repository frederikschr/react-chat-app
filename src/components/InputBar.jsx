import { useState, useContext } from 'react';
import { UserAuthContext } from '../firebase/app';
import { createMessage } from '../firebase/db/messages';

const InputBar = ({amountOfMessages}) => {

  const user = useContext(UserAuthContext);

  const [inputMessage, setInputMessage] = useState('');

  const handleMessage = (e) => {
    e.preventDefault();
    createMessage(inputMessage, user, amountOfMessages + 1);
    setInputMessage('');
  }
  
  return (
    <div className="input-bar">
      <input value={inputMessage} onChange={e => setInputMessage(e.target.value)} type="text" placeholder="Enter message..."></input>
      <button onClick={handleMessage}>Send</button>
    </div>
  )
}

export default InputBar;
