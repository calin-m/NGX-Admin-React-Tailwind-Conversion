import React, { useState } from 'react';

export default function Chat() {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello! Welcome to NGX Admin Support.', sender: 'bot', time: '10:14 AM' },
    { id: 2, text: 'Hi! Can you help me export my orders to CSV?', sender: 'user', time: '10:15 AM' },
    { id: 3, text: 'Sure! Simply navigate to Orders & Invoices and click "Export CSV".', sender: 'bot', time: '10:16 AM' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = e => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMsg = { id: Date.now(), text: input, sender: 'user', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
    setMessages(prev => [...prev, newMsg]);
    setInput('');

    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { id: Date.now() + 1, text: 'Thank you for your message! Our agent will assist you shortly.', sender: 'bot', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
      ]);
    }, 1000);
  };

  return (
    <div className="w-full h-[540px] rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg flex flex-col overflow-hidden">
      <div className="p-4 bg-slate-50 dark:bg-slate-700/50 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center text-sm shadow-sm">
            💬
          </div>
          <div>
            <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm">NGX Live Support Chat</h3>
            <span className="text-[10px] text-emerald-500 font-semibold">● Bot Online</span>
          </div>
        </div>
      </div>

      <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50/50 dark:bg-slate-900/50">
        {messages.map(msg => (
          <div key={msg.id} className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
            <div className={`max-w-xs px-4 py-2.5 rounded-2xl text-xs shadow-xs ${
              msg.sender === 'user' ? 'bg-indigo-600 text-white rounded-br-none' : 'bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-600 rounded-bl-none'
            }`}>
              {msg.text}
            </div>
            <span className="text-[9px] text-slate-400 mt-1 px-1">{msg.time}</span>
          </div>
        ))}
      </div>

      <form onSubmit={handleSend} className="p-3 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 flex items-center space-x-2">
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={e => setInput(e.target.value)}
          className="flex-1 px-4 py-2 text-xs rounded-xl bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-slate-100 focus:outline-none"
        />
        <button type="submit" className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl transition-all">
          Send
        </button>
      </form>
    </div>
  );
}
