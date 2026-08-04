import React, { useState } from 'react';
import Header from './components/sections/Header.jsx';
import Footer from './components/sections/Footer.jsx';
import ECommerce from './components/sections/ECommerce.jsx';
import ProfitCard from './components/sections/ProfitCard.jsx';
import TrafficRevealCard from './components/sections/TrafficRevealCard.jsx';
import CountryOrders from './components/sections/CountryOrders.jsx';
import UserActivity from './components/sections/UserActivity.jsx';
import EarningCard from './components/sections/EarningCard.jsx';
import ChartsPanel from './components/sections/ChartsPanel.jsx';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''} bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-sans flex flex-col antialiased transition-colors duration-200`}>
      {/* Converted Corporate Header Bar */}
      <Header isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />

      {/* Main Converted Corporate Dashboard Body View */}
      <main className="flex-1 p-6 max-w-7xl mx-auto w-full space-y-6">
        <ECommerce />

        {/* Analytics & Financial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProfitCard />
          <TrafficRevealCard />
          <EarningCard />
        </div>

        {/* Charts & Global Orders Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <ChartsPanel />
          </div>
          <div>
            <CountryOrders />
          </div>
        </div>

        {/* User Stream & Activity Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <UserActivity />
        </div>
      </main>

      {/* Converted Corporate Footer Bar */}
      <Footer />
    </div>
  );
}
