import { UserAuthContext } from '../firebase/app';
import { useContext } from 'react';

const Message = ({msg}) => {

  const user = useContext(UserAuthContext);

  return (
    <div className="message">
      <div className={msg.sender === user.displayName ? "message-self" : "message-foreign"}>
        <p>{msg.sender} : </p><p>{msg.content}</p>
      </div>
    </div>
  )
}

export default Message;

