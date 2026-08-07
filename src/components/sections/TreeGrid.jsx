import React, { useState } from 'react';

export default function TreeGrid() {
  const [expanded, setExpanded] = useState({ 1: true, 11: true, 2: true });

  const toggleExpand = id => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const expandAll = () => {
    setExpanded({ 1: true, 11: true, 12: true, 2: true, 3: true });
  };

  const collapseAll = () => {
    setExpanded({});
  };

  const treeData = [
    {
      id: 1,
      name: 'src/ (Application Source)',
      type: 'Source Folder',
      size: '3.4 MB',
      children: [
        {
          id: 11,
          name: 'components/sections/',
          type: 'Folder',
          size: '2.1 MB',
          children: [
            { id: 111, name: 'ECommerce.jsx', type: 'React Component', size: '14.2 KB' },
            { id: 112, name: 'SmartTable.jsx', type: 'React Component', size: '9.8 KB' },
            { id: 113, name: 'Echarts.jsx', type: 'React Component', size: '6.4 KB' }
          ]
        },
        {
          id: 12,
          name: 'hooks/',
          type: 'Folder',
          size: '540 KB',
          children: [
            { id: 121, name: 'useEarning.js', type: 'Custom Hook', size: '2.4 KB' },
            { id: 122, name: 'useSmartTableData.js', type: 'Custom Hook', size: '3.8 KB' }
          ]
        },
        { id: 13, name: 'App.jsx', type: 'React Entrypoint', size: '4.2 KB' },
        { id: 14, name: 'index.css', type: 'Tailwind v4 Styles', size: '8.1 KB' }
      ]
    },
    {
      id: 2,
      name: 'old-src/ (Legacy Reference)',
      type: 'Angular 15 Folder',
      size: '42.8 MB',
      children: [
        { id: 21, name: 'ngx-admin-master/src/app/', type: 'Angular Source', size: '38.4 MB' }
      ]
    },
    { id: 3, name: 'package.json', type: 'JSON Manifest', size: '2.8 KB' }
  ];

  return (
    <div className="w-full rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-700/60 pb-3">
        <div>
          <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base">Hierarchical Tree Grid Table</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">Multi-Level Collapsible File System Directory</p>
        </div>

        <div className="flex items-center space-x-2 text-xs">
          <button
            onClick={expandAll}
            className="px-3 py-1 bg-accent-light text-accent font-semibold rounded-lg hover:opacity-80 transition-colors"
          >
            📂 Expand All
          </button>
          <button
            onClick={collapseAll}
            className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 font-semibold rounded-lg hover:bg-slate-200"
          >
            📁 Collapse All
          </button>
        </div>
      </div>

      <div className="overflow-x-auto text-xs">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-700 text-slate-400 font-semibold uppercase">
              <th className="py-2.5 px-4">Directory / File Path</th>
              <th className="py-2.5 px-4">Node Type</th>
              <th className="py-2.5 px-4 text-right">Size</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">
            {treeData.map(node => (
              <React.Fragment key={node.id}>
                {/* Level 1 Row */}
                <tr
                  onClick={() => node.children && toggleExpand(node.id)}
                  className={`hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors ${
                    node.children ? 'cursor-pointer' : ''
                  }`}
                >
                  <td className="py-3 px-4 flex items-center space-x-2">
                    {node.children ? (
                      <div className="w-5 h-5 flex items-center justify-center text-slate-500 hover:text-accent transition-colors shrink-0">
                        <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${expanded[node.id] ? 'rotate-90 text-accent' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      </div>
                    ) : (
                      <span className="w-5" />
                    )}
                    <span className="text-base select-none">{node.children ? (expanded[node.id] ? '📂' : '📁') : '📄'}</span>
                    <span className="font-bold text-slate-900 dark:text-slate-100">{node.name}</span>
                  </td>
                  <td className="py-3 px-4 text-slate-500">{node.type}</td>
                  <td className="py-3 px-4 text-right font-bold text-slate-700 dark:text-slate-300">{node.size}</td>
                </tr>

                {/* Level 2 Children */}
                {node.children && expanded[node.id] && node.children.map(child => (
                  <React.Fragment key={child.id}>
                    <tr
                      onClick={() => child.children && toggleExpand(child.id)}
                      className={`bg-slate-50/40 dark:bg-slate-700/20 hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors animate-fade-in ${
                        child.children ? 'cursor-pointer' : ''
                      }`}
                    >
                      <td className="py-2.5 px-4 pl-10 flex items-center space-x-2 text-slate-700 dark:text-slate-200 font-semibold">
                        {child.children ? (
                          <div className="w-5 h-5 flex items-center justify-center text-slate-500 hover:text-accent transition-colors shrink-0">
                            <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${expanded[child.id] ? 'rotate-90 text-accent' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="9 18 15 12 9 6" />
                            </svg>
                          </div>
                        ) : (
                          <span className="w-5 text-slate-400">📄</span>
                        )}
                        <span className="text-sm select-none">{child.children ? (expanded[child.id] ? '📂' : '📁') : ''}</span>
                        <span>{child.name}</span>
                      </td>
                      <td className="py-2.5 px-4 text-slate-400">{child.type}</td>
                      <td className="py-2.5 px-4 text-right text-slate-500 font-medium">{child.size}</td>
                    </tr>

                    {/* Level 3 Children */}
                    {child.children && expanded[child.id] && child.children.map(subChild => (
                      <tr key={subChild.id} className="bg-slate-100/50 dark:bg-slate-700/30 hover:bg-slate-100 dark:hover:bg-slate-700/40 transition-colors animate-fade-in">
                        <td className="py-2 px-4 pl-16 text-slate-600 dark:text-slate-300 flex items-center space-x-2">
                          <span className="text-slate-400">📄</span>
                          <span>{subChild.name}</span>
                        </td>
                        <td className="py-2 px-4 text-slate-400 text-[11px]">{subChild.type}</td>
                        <td className="py-2 px-4 text-right text-slate-400 text-[11px]">{subChild.size}</td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

