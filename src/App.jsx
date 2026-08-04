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
import UserManagement from './components/sections/UserManagement.jsx';
import Settings from './components/sections/Settings.jsx';
import OrderModal from './components/sections/OrderModal.jsx';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

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
            <div className="space-y-4">
              <div className="flex justify-end">
                <button
                  onClick={() => setIsOrderModalOpen(true)}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-xl shadow-sm transition-all flex items-center space-x-2"
                >
                  <span>➕ Create New Order</span>
                </button>
              </div>
              <SmartTable />
            </div>
          ) : activeTab === 'users' ? (
            <UserManagement />
          ) : activeTab === 'analytics' ? (
            <div className="space-y-6">
              <VisitorsAnalytics />
              <TrafficRevealCard />
            </div>
          ) : activeTab === 'settings' ? (
            <Settings />
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

              {/* Row 4: Live Activity Stream & Quick Action Card */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <UserActivity />
                </div>
                <div>
                  <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-lg space-y-4">
                    <h4 className="font-bold text-slate-900 dark:text-slate-100">Quick Actions</h4>
                    <p className="text-xs text-slate-500">Create new orders or navigate across Corporate suite tabs.</p>
                    <button
                      onClick={() => setIsOrderModalOpen(true)}
                      className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-semibold shadow-sm transition-all"
                    >
                      ➕ Create New Order
                    </button>
                    <button
                      onClick={() => setActiveTab('users')}
                      className="w-full py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-xl text-xs font-semibold hover:bg-slate-200 dark:hover:bg-slate-600 transition-all"
                    >
                      👥 View Team Directory
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </main>
      </div>

      {/* Create Order Modal */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        onSubmit={newOrder => {
          alert(`Order created successfully for ${newOrder.customer}!`);
        }}
      />

      {/* Converted Corporate Footer Bar */}
      <Footer />
    </div>
  );
}
