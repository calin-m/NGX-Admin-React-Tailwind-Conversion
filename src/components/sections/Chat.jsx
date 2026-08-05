import React, { useState } from 'react';
import useChat from '../../hooks/useChat.js';

export default function Chat() {
  const { contacts, activeContact, setActiveContactId, activeMessages, sendMessage } = useChat();
  const [input, setInput] = useState('');

  const handleSend = e => {
    e.preventDefault();
    if (!input.trim()) return;
    sendMessage(input);
    setInput('');
  };

  return (
    <div className="w-full h-[540px] rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg flex overflow-hidden">
      {/* Contact Sidebar */}
      <div className="w-1/3 border-r border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/50 p-3 flex flex-col">
        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 px-2">Contacts</h4>
        <div className="space-y-1 overflow-y-auto flex-1">
          {contacts.map(c => (
            <button
              key={c.id}
              onClick={() => setActiveContactId(c.id)}
              className={`w-full p-2.5 rounded-xl flex items-center space-x-3 text-left transition-all ${
                activeContact.id === c.id
                  ? 'bg-indigo-50 dark:bg-indigo-900/40 border border-indigo-200 dark:border-indigo-800'
                  : 'hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <img src={c.avatar} alt={c.name} className="w-9 h-9 rounded-full object-cover" />
              <div className="min-w-0 flex-1">
                <h5 className="text-xs font-bold text-slate-900 dark:text-slate-100 truncate">{c.name}</h5>
                <p className="text-[10px] text-slate-500 truncate">{c.role}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Chat Messages Panel */}
      <div className="flex-1 flex flex-col">
        <div className="p-4 bg-slate-50 dark:bg-slate-700/50 border-b border-slate-200 dark:border-slate-700 flex items-center space-x-3">
          <img src={activeContact.avatar} alt={activeContact.name} className="w-9 h-9 rounded-full object-cover shadow-sm" />
          <div>
            <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm">{activeContact.name}</h3>
            <span className="text-[10px] text-emerald-500 font-semibold">● {activeContact.status}</span>
          </div>
        </div>

        <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50/50 dark:bg-slate-900/50">
          {activeMessages.map(msg => (
            <div key={msg.id} className={`flex flex-col ${msg.sender === 'me' ? 'items-end' : 'items-start'}`}>
              <div className={`max-w-xs px-4 py-2.5 rounded-2xl text-xs shadow-xs ${
                msg.sender === 'me'
                  ? 'bg-indigo-600 text-white rounded-br-none'
                  : 'bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-600 rounded-bl-none'
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
            placeholder={`Message ${activeContact.name}...`}
            value={input}
            onChange={e => setInput(e.target.value)}
            className="flex-1 px-4 py-2 text-xs rounded-xl bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-slate-100 focus:outline-none"
          />
          <button type="submit" className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl transition-all">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

