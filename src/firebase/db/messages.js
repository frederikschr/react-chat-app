import { collection, addDoc, onSnapshot, query, orderBy } from 'firebase/firestore'; 
import { db, firebase } from '../app';

const createMessage = async (content, sender, docID) => {    
  await addDoc(collection(db, "messages"), {
    content: content,
    sender: sender.displayName,
    id: docID
  }).catch(e => {
    console.log(e);
  })
}

const fetchMessagesRealtime = async (cb) => {
  const q = query(collection(db, "messages"), orderBy("id"))
  onSnapshot(q, (querySnapshot) => {
    const messages = [];
    querySnapshot.forEach((doc) => {
      messages.push(doc.data());
    })
    cb(messages);
  })

}

export { createMessage, fetchMessagesRealtime };

