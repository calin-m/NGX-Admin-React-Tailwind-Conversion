import React, { useState, useEffect } from 'react';

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
import Chat from './components/sections/Chat.jsx';
import CalendarApp from './components/sections/CalendarApp.jsx';
import Toastr from './components/sections/Toastr.jsx';
import Dialogs from './components/sections/Dialogs.jsx';
import FormInputs from './components/sections/FormInputs.jsx';
import FormLayouts from './components/sections/FormLayouts.jsx';
import Login from './components/sections/Login.jsx';
import Register from './components/sections/Register.jsx';
import ResetPassword from './components/sections/ResetPassword.jsx';
import Stepper from './components/sections/Stepper.jsx';
import Accordion from './components/sections/Accordion.jsx';
import Grid from './components/sections/Grid.jsx';
import Typography from './components/sections/Typography.jsx';
import Icons from './components/sections/Icons.jsx';
import TreeGrid from './components/sections/TreeGrid.jsx';
import Maps from './components/sections/Maps.jsx';
import CkEditor from './components/sections/CkEditor.jsx';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768;
    }
    return false;
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSidebarCollapsed(true);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const [accentColor, setAccentColor] = useState('teal');

  useEffect(() => {
    document.documentElement.setAttribute('data-accent', accentColor);
  }, [accentColor]);

  useEffect(() => {
    const handleGlobalKeyDown = e => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);


  const toggleTheme = () => {
    setIsDarkMode(prev => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return next;
    });
  };

  const toggleSidebar = () => {
    setIsSidebarCollapsed(prev => !prev);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''} bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-sans flex flex-col antialiased transition-colors duration-200`}>
      <Header
        isDarkMode={isDarkMode}
        onToggleTheme={toggleTheme}
        onToggleSidebar={toggleSidebar}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenThemeCustomizer={() => setIsCustomizerOpen(true)}
      />

      <div className="flex-1 flex w-full items-start">
        <Sidebar
          isCollapsed={isSidebarCollapsed}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onToggleSidebar={toggleSidebar}
        />

        <main className={`flex-1 p-4 sm:p-6 w-full min-w-0 space-y-6 overflow-x-hidden transition-[padding-left] duration-300 ease-in-out ${isSidebarCollapsed ? 'md:pl-24' : 'md:pl-72'}`}>
          <div key={activeTab} className="w-full animate-fade-in">
            {activeTab === 'maps' ? (
              <Maps />
            ) : activeTab === 'ckeditor' ? (
              <CkEditor />
            ) : activeTab === 'stepper' ? (
              <Stepper />
            ) : activeTab === 'accordion' ? (
              <Accordion />
            ) : activeTab === 'grid' ? (
              <Grid />
            ) : activeTab === 'typography' ? (
              <Typography />
            ) : activeTab === 'icons' ? (
              <Icons />
            ) : activeTab === 'treegrid' ? (
              <TreeGrid />
            ) : activeTab === 'chat' ? (
              <Chat />
            ) : activeTab === 'calendar' ? (
              <CalendarApp />
            ) : activeTab === 'forms' ? (
              <div className="space-y-6">
                <FormInputs />
                <FormLayouts />
              </div>
            ) : activeTab === 'auth' ? (
              <div className="space-y-8 py-4">
                <Login />
                <Register />
                <ResetPassword />
              </div>
            ) : activeTab === 'iot' ? (
              <div className="space-y-6">
                <StatusCard />
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                  <div className="lg:col-span-4 flex">
                    <TemperatureCard />
                  </div>
                  <div className="lg:col-span-8 flex">
                    <ElectricityCard />
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                  <div className="lg:col-span-8 flex">
                    <SecurityCameras />
                  </div>
                  <div className="lg:col-span-4 flex flex-col space-y-6">
                    <SolarCard />
                    <WeatherCard />
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                  <div className="lg:col-span-8 flex">
                    <RoomsCard />
                  </div>
                  <div className="lg:col-span-4 flex">
                    <KittenCard />
                  </div>
                </div>
              </div>

            ) : activeTab === 'orders' ? (
              <div className="space-y-4">
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => setIsOrderModalOpen(true)}
                    className="px-4 py-2 bg-accent hover:bg-accent-hover text-white text-xs font-semibold rounded-xl shadow-sm transition-all active:scale-[0.98] flex items-center space-x-2 cursor-pointer"
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
              <div className="space-y-6">
                <Settings />
                <Toastr />
                <Dialogs />
              </div>
            ) : (
              <ECommerce />
            )}
          </div>
        </main>
      </div>

      <SearchInput isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      <ThemeCustomizer
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        accentColor={accentColor}
        setAccentColor={setAccentColor}
        isDarkMode={isDarkMode}
        onToggleTheme={toggleTheme}
      />

      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        onSubmit={newOrder => {
          alert(`Order created successfully for ${newOrder.customer}!`);
        }}
      />

      <Footer />
    </div>
  );
}
