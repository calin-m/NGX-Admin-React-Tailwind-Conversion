import React from 'react';
import ChartsPanel from './ChartsPanel.jsx';
import ProfitCard from './ProfitCard.jsx';
import EarningCard from './EarningCard.jsx';
import TrafficRevealCard from './TrafficRevealCard.jsx';
import CountryOrders from './CountryOrders.jsx';
import ProgressSection from './ProgressSection.jsx';
import VisitorsAnalytics from './VisitorsAnalytics.jsx';
import UserActivity from './UserActivity.jsx';

export default function ECommerce() {
  const stats = [
    { title: 'Total Revenue', val: '$248,500', change: '+12.4%', icon: '💎', color: 'text-indigo-500 bg-indigo-500/10' },
    { title: 'Total Orders', val: '14,820', change: '+8.1%', icon: '📦', color: 'text-emerald-500 bg-emerald-500/10' },
    { title: 'Conversion Rate', val: '3.42%', change: '+0.6%', icon: '🎯', color: 'text-amber-500 bg-amber-500/10' },
    { title: 'Avg Order Value', val: '$167.50', change: '+4.2%', icon: '💳', color: 'text-purple-500 bg-purple-500/10' }
  ];

  return (
    <div className="w-full space-y-6">
      {/* Top KPI Summary Row */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s, idx) => (
          <div key={idx} className="rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-5 flex items-center justify-between hover:shadow-xl transition-shadow">
            <div className="space-y-1">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">{s.title}</span>
              <div className="flex items-baseline space-x-2">
                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100">{s.val}</h3>
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">{s.change}</span>
              </div>
            </div>
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold ${s.color}`}>
              {s.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Row 1: col-xxl-5 (ProfitCard + EarningCard + TrafficRevealCard) & col-xxl-7 (ChartsPanel) */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-stretch">
        <div className="xl:col-span-5 flex flex-col space-y-6 justify-between">
          <ProfitCard />
          <EarningCard />
          <TrafficRevealCard />
        </div>
        <div className="xl:col-span-7 flex">
          <ChartsPanel />
        </div>
      </div>


      {/* Row 2: xl:col-span-8 (CountryOrders) & xl:col-span-4 (ProgressSection) */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-stretch">
        <div className="xl:col-span-8 flex">
          <CountryOrders />
        </div>
        <div className="xl:col-span-4 flex">
          <ProgressSection />
        </div>
      </div>

      {/* Row 3: xl:col-span-8 (VisitorsAnalytics) & xl:col-span-4 (UserActivity) */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-stretch">
        <div className="xl:col-span-8 flex">
          <VisitorsAnalytics />
        </div>
        <div className="xl:col-span-4 flex">
          <UserActivity />
        </div>
      </div>
    </div>
  );
}



