import React, { useState } from 'react';

export default function TreeGrid() {
  const [expanded, setExpanded] = useState({ 1: true });

  const toggleExpand = id => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const treeData = [
    {
      id: 1,
      name: 'Project Root Directory',
      type: 'Folder',
      size: '4.2 MB',
      children: [
        { id: 11, name: 'src/components/sections/', type: 'Folder', size: '1.8 MB' },
        { id: 12, name: 'src/hooks/', type: 'Folder', size: '420 KB' },
        { id: 13, name: 'package.json', type: 'JSON File', size: '2.1 KB' }
      ]
    },
    { id: 2, name: 'public/favicon.ico', type: 'Image', size: '15 KB' },
    { id: 3, name: 'README.md', type: 'Markdown Document', size: '4.5 KB' }
  ];

  return (
    <div className="w-full rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 space-y-6">
      <div className="border-b border-slate-100 dark:border-slate-700/60 pb-3">
        <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base">Hierarchical Tree Grid Table</h3>
        <p className="text-xs text-slate-500 dark:text-slate-400">Collapsible File System Directory Structure</p>
      </div>

      <div className="overflow-x-auto text-xs">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-700 text-slate-400 font-semibold uppercase">
              <th className="py-2.5 px-4">Name</th>
              <th className="py-2.5 px-4">Type</th>
              <th className="py-2.5 px-4 text-right">Size</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">
            {treeData.map(node => (
              <React.Fragment key={node.id}>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors">
                  <td className="py-3 px-4 flex items-center space-x-2">
                    {node.children ? (
                      <button onClick={() => toggleExpand(node.id)} className="w-5 h-5 font-bold text-slate-500 hover:text-indigo-600">
                        {expanded[node.id] ? '▼' : '▶'}
                      </button>
                    ) : (
                      <span className="w-5" />
                    )}
                    <span className="font-bold text-slate-800 dark:text-slate-200">{node.name}</span>
                  </td>
                  <td className="py-3 px-4 text-slate-500">{node.type}</td>
                  <td className="py-3 px-4 text-right font-semibold text-slate-700 dark:text-slate-300">{node.size}</td>
                </tr>
                {node.children && expanded[node.id] && node.children.map(child => (
                  <tr key={child.id} className="bg-slate-50/40 dark:bg-slate-700/20 hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors">
                    <td className="py-2.5 px-4 pl-10 text-slate-600 dark:text-slate-300 font-medium">
                      📄 {child.name}
                    </td>
                    <td className="py-2.5 px-4 text-slate-400">{child.type}</td>
                    <td className="py-2.5 px-4 text-right text-slate-500">{child.size}</td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
