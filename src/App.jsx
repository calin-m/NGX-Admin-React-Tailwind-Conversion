import React, { useState } from 'react';
import Header from './components/sections/Header.jsx';
import Footer from './components/sections/Footer.jsx';
import Sidebar from './components/sections/Sidebar.jsx';
import ECommerce from './components/sections/ECommerce.jsx';
import ProfitCard from './components/sections/ProfitCard.jsx';
import TrafficRevealCard from './components/sections/TrafficRevealCard.jsx';
import CountryOrders from './components/sections/CountryOrders.jsx';
import UserActivity from './components/sections/UserActivity.jsx';
import EarningCard from './components/sections/EarningCard.jsx';
import ChartsPanel from './components/sections/ChartsPanel.jsx';
import ProgressSection from './components/sections/ProgressSection.jsx';
import VisitorsAnalytics from './components/sections/VisitorsAnalytics.jsx';
import SmartTable from './components/sections/SmartTable.jsx';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const toggleSidebar = () => {
    setIsSidebarCollapsed(prev => !prev);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''} bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-sans flex flex-col antialiased transition-colors duration-200`}>
      {/* Top Converted Corporate Header Bar */}
      <Header
        isDarkMode={isDarkMode}
        onToggleTheme={toggleTheme}
        onToggleSidebar={toggleSidebar}
      />

      {/* Main Body Layout with Sidebar Drawer */}
      <div className="flex-1 flex w-full">
        {/* Converted Corporate Sidebar Navigation Drawer */}
        <Sidebar
          isCollapsed={isSidebarCollapsed}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {/* Main Converted Corporate View */}
        <main className="flex-1 p-6 max-w-7xl mx-auto w-full space-y-6 overflow-x-hidden">
          {activeTab === 'orders' ? (
            <SmartTable />
          ) : activeTab === 'analytics' ? (
            <div className="space-y-6">
              <VisitorsAnalytics />
              <TrafficRevealCard />
            </div>
          ) : (
            <>
              {/* Top-Level KPI Summary Cards */}
              <ECommerce />

              {/* Row 1: Analytics Cards & Combined Dual Chart */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ProfitCard />
                <TrafficRevealCard />
                <EarningCard />
              </div>

              {/* Row 2: Combined Dual Chart & Country Orders */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <ChartsPanel />
                </div>
                <div>
                  <CountryOrders />
                </div>
              </div>

              {/* Row 3: Progress Section & Visitors Analytics */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div>
                  <ProgressSection />
                </div>
                <div className="lg:col-span-2">
                  <VisitorsAnalytics />
                </div>
              </div>

              {/* Row 4: Live Activity Stream & Orders Preview */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <UserActivity />
                </div>
                <div>
                  <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-lg space-y-4">
                    <h4 className="font-bold text-slate-900 dark:text-slate-100">Quick Table Access</h4>
                    <p className="text-xs text-slate-500">Switch sidebar tabs to view full Orders & Invoices Data Table.</p>
                    <button
                      onClick={() => setActiveTab('orders')}
                      className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-semibold shadow-sm transition-all"
                    >
                      View All Orders ➔
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </main>
      </div>

      {/* Converted Corporate Footer Bar */}
      <Footer />
    </div>
  );
}
