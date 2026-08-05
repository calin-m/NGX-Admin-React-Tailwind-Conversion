import { useState } from 'react';

const initialContacts = [
  { id: '1', name: 'Nick Jones', role: 'Software Engineer', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250', status: 'online' },
  { id: '2', name: 'Eva Green', role: 'UI/UX Designer', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=250', status: 'online' },
  { id: '3', name: 'Lee Wong', role: 'Product Manager', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=250', status: 'offline' }
];

const initialMessages = {
  '1': [
    { id: 'm1', text: 'Hello! Have you reviewed the latest React dashboard specs?', sender: 'contact', time: '10:14 AM' },
    { id: 'm2', text: 'Yes, everything looks great! Conversion is proceeding smoothly.', sender: 'me', time: '10:16 AM' }
  ],
  '2': [
    { id: 'm1', text: 'Hi! I uploaded new UI wireframes for the theme customizer.', sender: 'contact', time: '09:30 AM' }
  ],
  '3': [
    { id: 'm1', text: 'Hey, let us catch up on the Q3 roadmap meeting tomorrow.', sender: 'contact', time: 'Yesterday' }
  ]
};

export function useChat() {
  const [contacts] = useState(initialContacts);
  const [activeContactId, setActiveContactId] = useState('1');
  const [messagesMap, setMessagesMap] = useState(initialMessages);

  const activeContact = contacts.find(c => c.id === activeContactId) || contacts[0];
  const activeMessages = messagesMap[activeContactId] || [];

  const sendMessage = (text) => {
    if (!text.trim()) return;

    const newMsg = {
      id: `m_${Date.now()}`,
      text: text.trim(),
      sender: 'me',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessagesMap(prev => ({
      ...prev,
      [activeContactId]: [...(prev[activeContactId] || []), newMsg]
    }));

    // Auto reply simulation after 1 second
    setTimeout(() => {
      const replyMsg = {
        id: `m_reply_${Date.now()}`,
        text: `Thanks for your message: "${text.trim()}". I am working on it!`,
        sender: 'contact',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessagesMap(prev => ({
        ...prev,
        [activeContactId]: [...(prev[activeContactId] || []), replyMsg]
      }));
    }, 1000);
  };

  return {
    contacts,
    activeContact,
    setActiveContactId,
    activeMessages,
    sendMessage
  };
}

export default useChat;
