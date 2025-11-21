import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import DashboardView from '@/components/DashboardView';
import MonitoringView from '@/components/MonitoringView';
import OrdView from '@/components/OrdView';
import MapView from '@/components/MapView';
import ArchiveView from '@/components/ArchiveView';
import SettingsView from '@/components/SettingsView';
import ReportsView from '@/components/ReportsView';

const Index = () => {
  const [activeSection, setActiveSection] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', label: 'Главная', icon: 'LayoutDashboard' },
    { id: 'monitoring', label: 'Мониторинг', icon: 'Video' },
    { id: 'ord', label: 'ОРД', icon: 'Shield' },
    { id: 'map', label: 'Карта', icon: 'Map' },
    { id: 'archive', label: 'Архив', icon: 'Database' },
    { id: 'settings', label: 'Настройки', icon: 'Settings' },
    { id: 'reports', label: 'Отчеты', icon: 'BarChart3' },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <DashboardView />;
      case 'monitoring':
        return <MonitoringView />;
      case 'ord':
        return <OrdView />;
      case 'map':
        return <MapView />;
      case 'archive':
        return <ArchiveView />;
      case 'settings':
        return <SettingsView />;
      case 'reports':
        return <ReportsView />;
      default:
        return <DashboardView />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <Icon name="Video" size={24} className="text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Система видеонаблюдения</h1>
                <p className="text-sm text-muted-foreground">Пермский край</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                Система активна
              </Badge>
              <Button variant="ghost" size="icon">
                <Icon name="Bell" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="User" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        <aside className="w-64 min-h-[calc(100vh-73px)] border-r border-border bg-card">
          <nav className="p-4 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  activeSection === item.id
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                }`}
              >
                <Icon name={item.icon} size={20} />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </nav>
        </aside>

        <main className="flex-1 p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Index;
