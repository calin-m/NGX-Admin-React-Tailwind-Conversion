import React, { useState } from 'react';
import Button from './components/ui/Button.jsx';
import Badge from './components/ui/Badge.jsx';
import Card from './components/ui/Card.jsx';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50">
      <Card className="max-w-md w-full text-center space-y-6">
        <div className="flex justify-center">
          <Badge variant="blue">Enterprise React Starter</Badge>
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-bold tracking-tight">
            Clean Starter Active
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Your production-ready, unopinionated enterprise React starter is configured with Tailwind CSS, Vitest, Storybook, and automated verification tools.
          </p>
        </div>

        <div className="flex items-center justify-center gap-3 pt-2">
          <Button variant="primary" onClick={() => setCount(prev => prev + 1)}>
            Count: {count}
          </Button>
          <Button variant="outline" onClick={() => setCount(0)}>
            Reset
          </Button>
        </div>
      </Card>
    </div>
  );
}
