import { collection, addDoc, onSnapshot, query, orderBy } from 'firebase/firestore'; 
import { db } from '../app';
import { useState, useEffect } from 'react';

const createMessage = async (content, sender, docID) => {    
  await addDoc(collection(db, "messages"), {
    content: content,
    sender: sender.displayName,
    id: docID
  }).catch(e => {
    console.log(e);
  })
}

const useRealtimeMessages = () => {

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("id"))
    onSnapshot(q, (querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((doc) => {
        messages.push(doc.data());
      })
      setMessages(messages);
    })
  }, [])
  
  return messages;
}

export { createMessage, useRealtimeMessages };

