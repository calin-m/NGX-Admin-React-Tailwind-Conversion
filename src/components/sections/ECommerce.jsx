import React from 'react';
import TrendBadge from '../ui/TrendBadge.jsx';
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
    { title: 'Total Revenue', val: '$248,500', change: '+12.4%', icon: '💎', color: 'text-accent bg-accent-light' },

    { title: 'Total Orders', val: '14,820', change: '+8.1%', icon: '📦', color: 'text-emerald-500 bg-emerald-500/10' },
    { title: 'Conversion Rate', val: '3.42%', change: '+0.6%', icon: '🎯', color: 'text-amber-500 bg-amber-500/10' },
    { title: 'Avg Order Value', val: '$167.50', change: '+4.2%', icon: '💳', color: 'text-purple-500 bg-purple-500/10' }
  ];

  return (
    <div className="w-full space-y-6">
      {/* Top KPI Summary Row */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((s, idx) => (
          <div key={idx} className="rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-3.5 sm:p-5 flex items-center justify-between gap-2.5 hover:shadow-xl transition-shadow min-w-0">
            <div className="space-y-1 min-w-0 flex-1">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 block truncate">{s.title}</span>
              <div className="flex flex-wrap items-baseline gap-1.5 min-w-0">
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-slate-100">{s.val}</h3>
                <TrendBadge value={s.change} />
              </div>
            </div>
            <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-lg sm:text-xl font-bold shrink-0 ${s.color}`}>
              {s.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Row 1: Profit Analytics + Earning Live Stats paired directly with ChartsPanel */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-stretch">
        <div className="xl:col-span-5 flex flex-col space-y-6">
          <ProfitCard />
          <EarningCard />
        </div>
        <div className="xl:col-span-7 flex">
          <ChartsPanel />
        </div>
      </div>

      {/* Row 2: Traffic Source Reveal paired side-by-side with Corporate Targets */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        <div className="lg:col-span-6 flex">
          <TrafficRevealCard />
        </div>
        <div className="lg:col-span-6 flex">
          <ProgressSection />
        </div>
      </div>

      {/* Row 3: Full-Width Global Country Orders & World Map (12 Columns) */}
      <div className="w-full">
        <CountryOrders />
      </div>

      {/* Bottom Section: xl:col-span-8 (VisitorsAnalytics) & xl:col-span-4 (UserActivity) */}
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



