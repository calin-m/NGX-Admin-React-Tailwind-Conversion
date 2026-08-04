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
import SearchInput from './components/sections/SearchInput.jsx';
import ThemeCustomizer from './components/sections/ThemeCustomizer.jsx';
import StatusCard from './components/sections/StatusCard.jsx';
import TemperatureCard from './components/sections/TemperatureCard.jsx';
import ElectricityCard from './components/sections/ElectricityCard.jsx';
import SolarCard from './components/sections/SolarCard.jsx';
import SecurityCameras from './components/sections/SecurityCameras.jsx';
import RoomsCard from './components/sections/RoomsCard.jsx';
import WeatherCard from './components/sections/WeatherCard.jsx';
import KittenCard from './components/sections/KittenCard.jsx';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const [accentColor, setAccentColor] = useState('indigo');

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
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenThemeCustomizer={() => setIsCustomizerOpen(true)}
      />

      {/* Main Body Layout with Sidebar Drawer */}
      <div className="flex-1 flex w-full">
        {/* Converted Corporate Sidebar Navigation Drawer */}
        <Sidebar
          isCollapsed={isSidebarCollapsed}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {/* Main Converted View */}
        <main className="flex-1 p-6 max-w-7xl mx-auto w-full space-y-6 overflow-x-hidden">
          {activeTab === 'iot' ? (
            <div className="space-y-6">
              {/* Device Toggle Cards */}
              <StatusCard />

              {/* Climate & Electricity Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div>
                  <TemperatureCard />
                </div>
                <div className="lg:col-span-2">
                  <ElectricityCard />
                </div>
              </div>

              {/* Cameras & Solar Output */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <SecurityCameras />
                </div>
                <div className="space-y-6">
                  <SolarCard />
                  <WeatherCard />
                </div>
              </div>

              {/* Rooms & Pet Monitor */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <RoomsCard />
                <KittenCard />
              </div>
            </div>
          ) : activeTab === 'orders' ? (
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
                    <p className="text-xs text-slate-500">Switch between Corporate E-Commerce and IoT Smart Home dashboards.</p>
                    <button
                      onClick={() => setActiveTab('iot')}
                      className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-semibold shadow-sm transition-all"
                    >
                      🏠 Open IoT Smart Home View
                    </button>
                    <button
                      onClick={() => setIsOrderModalOpen(true)}
                      className="w-full py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-xl text-xs font-semibold hover:bg-slate-200 dark:hover:bg-slate-600 transition-all"
                    >
                      ➕ Create New Order
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </main>
      </div>

      {/* Global Command Palette Search Modal */}
      <SearchInput isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Theme Customizer Panel */}
      <ThemeCustomizer
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        accentColor={accentColor}
        setAccentColor={setAccentColor}
        isDarkMode={isDarkMode}
        onToggleTheme={toggleTheme}
      />

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
