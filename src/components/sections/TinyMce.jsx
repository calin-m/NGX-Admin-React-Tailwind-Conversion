import React, { useState } from 'react';

/**
 * TinyMce Component
 * Modernized React 18 + Tailwind CSS v4 Component
 * Source Reference: old-src/ngx-admin-master <ngx-tiny-mce>
 */
export default function TinyMce(props) {
  const [content, setContent] = useState('Welcome to the modernized NGX Admin WYSIWYG editor! Feel free to edit this document content.');
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);

  return (
    <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-xs border border-slate-200 dark:border-slate-700 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-700 pb-3 mb-2">
        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
          TinyMCE WYSIWYG Editor
        </h3>
        <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 font-semibold">
          &lt;ngx-tiny-mce&gt;
        </span>
      </div>

      {/* Formatting Toolbar */}
      <div className="flex items-center space-x-1.5 p-2 bg-slate-100 dark:bg-slate-700/60 rounded-xl border border-slate-200 dark:border-slate-600">
        <button
          onClick={() => setIsBold(prev => !prev)}
          className={`px-3 py-1 rounded-lg text-xs font-extrabold transition-all ${isBold ? 'bg-indigo-600 text-white' : 'hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200'}`}
        >
          B
        </button>
        <button
          onClick={() => setIsItalic(prev => !prev)}
          className={`px-3 py-1 rounded-lg text-xs italic font-bold transition-all ${isItalic ? 'bg-indigo-600 text-white' : 'hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200'}`}
        >
          I
        </button>
        <div className="h-4 w-px bg-slate-300 dark:bg-slate-600 mx-1" />
        <button
          onClick={() => setContent(prev => prev + '\n- Bullet Point Entry')}
          className="px-3 py-1 rounded-lg text-xs font-bold hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200"
        >
          • List
        </button>
        <button
          onClick={() => setContent('')}
          className="px-3 py-1 rounded-lg text-xs font-bold text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-900/30"
        >
          Clear
        </button>
      </div>

      {/* Editable Area */}
      <textarea
        value={content}
        onChange={e => setContent(e.target.value)}
        rows={5}
        className={`w-full p-4 text-xs rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
          isBold ? 'font-bold' : ''
        } ${isItalic ? 'italic' : ''}`}
      />
    </div>
  );
}

