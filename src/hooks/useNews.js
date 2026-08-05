import { useState } from 'react';

const mockArticles = [
  { id: 1, title: 'React 18 & Vite 6 Performance Benchmarks', category: 'Tech', author: 'Dan Abramov', date: '10 mins ago', summary: 'Exploring automatic batching, concurrent rendering features, and instant HMR bundling speeds.' },
  { id: 2, title: 'Tailwind CSS v4 Oxide Engine Architecture', category: 'Design', author: 'Adam Wathan', date: '1 hour ago', summary: 'How Rust compilation and standalone CSS variable themes revolutionize frontend styling performance.' },
  { id: 3, title: 'Enterprise Micro-Frontend State Synchronization', category: 'Architecture', author: 'Martin Fowler', date: '3 hours ago', summary: 'Decoupling large SaaS platforms using modular domain context engines and contract-driven APIs.' },
  { id: 4, title: 'Building Autonomous AI Pair Programming Agents', category: 'AI', author: 'Antigravity Team', date: '5 hours ago', summary: 'Leveraging AST parsing, living architecture diagrams, and deterministic quality gates.' },
  { id: 5, title: 'Zero-Bloat Documentation Synchronization Engine', category: 'DevOps', author: 'Calin', date: 'Yesterday', summary: 'Automating legacy blueprint generation, architectural matrices, and pre-commit Git hooks.' }
];

export function useNews() {
  const [articles, setArticles] = useState(mockArticles);
  const [category, setCategory] = useState('All');
  const [isLoading, setIsLoading] = useState(false);

  const filterCategory = (cat) => {
    setCategory(cat);
  };

  const filteredArticles = category === 'All'
    ? articles
    : articles.filter(a => a.category.toLowerCase() === category.toLowerCase());

  const loadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      const nextId = articles.length + 1;
      const newArticle = {
        id: nextId,
        title: `Dynamic Industry Release #${nextId}`,
        category: 'Tech',
        author: 'System Feed',
        date: 'Just now',
        summary: 'Automated news stream pagination simulating real-time WebSocket article delivery.'
      };
      setArticles(prev => [...prev, newArticle]);
      setIsLoading(false);
    }, 800);
  };

  return {
    articles: filteredArticles,
    category,
    filterCategory,
    loadMore,
    isLoading
  };
}

export default useNews;
