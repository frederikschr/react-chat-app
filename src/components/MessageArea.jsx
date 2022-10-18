import Message from "./Message";

const MessageArea = ({messages}) => {
  return (
    <div className="message-area">

      <h3>Messages</h3>

        { messages ? messages.map((msg, i) => <Message key={i} msg={msg}/>) : <p>No Messages</p>} 

    </div>
  )
}

export default MessageArea;
