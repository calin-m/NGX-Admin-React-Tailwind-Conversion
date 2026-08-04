import React, { useState } from 'react';

export default function CkEditor() {
  const [content, setContent] = useState('<h3>Welcome to CKEditor React Integration</h3><p>Type your formatted text here...</p>');

  return (
    <div className="w-full rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 space-y-6">
      <div className="border-b border-slate-100 dark:border-slate-700/60 pb-3">
        <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base">CKEditor Rich Text Component</h3>
        <p className="text-xs text-slate-500 dark:text-slate-400">WYSIWYG Document Formatting</p>
      </div>

      <div className="space-y-3">
        <div className="p-2 bg-slate-100 dark:bg-slate-700/60 rounded-xl flex items-center space-x-2 text-xs font-bold text-slate-700 dark:text-slate-300">
          <button className="px-2 py-1 rounded bg-white dark:bg-slate-600 shadow-xs">B</button>
          <button className="px-2 py-1 rounded bg-white dark:bg-slate-600 shadow-xs italic">I</button>
          <button className="px-2 py-1 rounded bg-white dark:bg-slate-600 shadow-xs underline">U</button>
          <span className="h-4 w-px bg-slate-300 dark:bg-slate-600 mx-1" />
          <button className="px-2 py-1 rounded bg-white dark:bg-slate-600 shadow-xs">🔗 Link</button>
          <button className="px-2 py-1 rounded bg-white dark:bg-slate-600 shadow-xs">🖼️ Image</button>
        </div>

        <textarea
          value={content}
          onChange={e => setContent(e.target.value)}
          rows={8}
          className="w-full p-4 text-xs font-mono rounded-xl bg-slate-50 dark:bg-slate-700/40 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-slate-100 focus:outline-none"
        />
      </div>
    </div>
  );
}
