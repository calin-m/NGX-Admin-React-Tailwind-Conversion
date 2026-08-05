import React from 'react';
import useNews from '../../hooks/useNews.js';

export default function InfiniteList() {
  const { articles, category, filterCategory, loadMore, isLoading } = useNews();
  const categories = ['All', 'Tech', 'Design', 'Architecture', 'AI', 'DevOps'];

  return (
    <div className="w-full rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 space-y-4">
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700/60 pb-3">
        <div>
          <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base">Infinite Scroll News Stream</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">Dynamic Lazy Loaded Article Feed</p>
        </div>
        <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 font-semibold">
          &lt;ngx-infinite-list&gt;
        </span>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-2">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => filterCategory(cat)}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
              category === cat
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Article List */}
      <div className="space-y-3 max-h-72 overflow-y-auto pr-2">
        {articles.map(article => (
          <div key={article.id} className="p-3.5 bg-slate-50 dark:bg-slate-700/40 rounded-xl border border-slate-200/60 dark:border-slate-700/60 space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase font-bold text-indigo-600 dark:text-indigo-400">{article.category}</span>
              <span className="text-[10px] text-slate-400">{article.date}</span>
            </div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100">{article.title}</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-snug">{article.summary}</p>
            <p className="text-[10px] text-slate-400 font-medium pt-1">By {article.author}</p>
          </div>
        ))}
      </div>

      <button
        onClick={loadMore}
        disabled={isLoading}
        className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 text-white text-xs font-bold rounded-xl transition-all flex items-center justify-center space-x-2"
      >
        {isLoading ? (
          <span>Loading Articles...</span>
        ) : (
          <span>Load More Articles</span>
        )}
      </button>
    </div>
  );
}

