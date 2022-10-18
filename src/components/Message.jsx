import { UserAuthContext } from '../firebase/app';
import { useContext } from 'react';

const Message = ({msg}) => {

  const user = useContext(UserAuthContext);

  return (

      <div className={msg.sender === user.displayName ? "message-self" : "message-foreign"}>
        <p>{msg.sender} : </p><p>{msg.content}</p>
      </div>
  )
}

export default Message;

