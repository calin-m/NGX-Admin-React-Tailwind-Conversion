import React, { useState } from 'react';
import useChat from '../../hooks/useChat.js';
import ClearableInput from '../ui/ClearableInput.jsx';
import Avatar from '../ui/Avatar.jsx';

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
          {contacts.map(c => {
            const isSelected = activeContact.id === c.id;
            const _isOnline = c.status?.toLowerCase() === 'online';
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setActiveContactId(c.id)}
                className={`w-full p-2.5 rounded-xl flex items-center space-x-3 text-left transition-all border ${
                  isSelected
                    ? 'bg-accent-light border-accent text-slate-900 dark:text-slate-100 shadow-xs'
                    : 'border-transparent text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                }`}
              >
                <Avatar name={c.name} src={c.avatar} status={c.status} size="sm" />
                <div className="min-w-0 flex-1">
                  <h5 className="text-xs font-semibold text-slate-900 dark:text-slate-100 truncate">{c.name}</h5>
                  <p className="text-[10px] text-slate-500 truncate">{c.role}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Chat Messages Panel */}
      <div className="flex-1 flex flex-col">
        <div className="p-4 bg-slate-50 dark:bg-slate-700/50 border-b border-slate-200 dark:border-slate-700 flex items-center space-x-3">
          <Avatar name={activeContact.name} src={activeContact.avatar} status={activeContact.status} size="sm" />
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-sm">{activeContact.name}</h3>
            <span
              className={`text-[10px] font-semibold capitalize ${
                activeContact.status?.toLowerCase() === 'online' ? 'text-emerald-500' : 'text-slate-400 dark:text-slate-500'
              }`}
            >
              ● {activeContact.status}
            </span>
          </div>
        </div>

        <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50/50 dark:bg-slate-900/50">
          {activeMessages.map(msg => (
            <div key={msg.id} className={`flex flex-col ${msg.sender === 'me' ? 'items-end' : 'items-start'}`}>
              <div className={`max-w-xs px-4 py-2.5 rounded-2xl text-xs shadow-xs ${
                msg.sender === 'me'
                  ? 'bg-accent text-white rounded-br-none transition-colors'
                  : 'bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-600 rounded-bl-none'
              }`}>
                {msg.text}
              </div>
              <span className="text-[9px] text-slate-400 mt-1 px-1">{msg.time}</span>
            </div>
          ))}
        </div>

        <form onSubmit={handleSend} className="p-3 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 flex items-center space-x-2">
          <div className="flex-1">
            <ClearableInput
              value={input}
              onChange={e => setInput(e.target.value)}
              onClear={() => setInput('')}
              placeholder={`Message ${activeContact.name}...`}
            />
          </div>
          <button type="submit" className="px-4 py-2 bg-accent hover:bg-accent-hover text-white font-bold text-xs rounded-xl transition-all">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

