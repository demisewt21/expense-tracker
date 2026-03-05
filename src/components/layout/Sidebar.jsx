// ====================== Sidebar.jsx ======================
// Place in src/components/layout/Sidebar.jsx

import { LayoutDashboard, Clock, Receipt, Wallet } from 'lucide-react';

const Sidebar = ({ currentPage, onNavigate, onQuickAdd }) => {
  const navItems = [
    { label: 'Dashboard', icon: LayoutDashboard, page: 'dashboard' },
    { label: 'History', icon: Clock, page: 'history' },
    { label: 'Expenses', icon: Receipt, page: 'expenses' },
  ];

  const quickCategories = [
    { emoji: '🍔', name: 'Food' },
    { emoji: '🚕', name: 'Transport' },
    { emoji: '🏠', name: 'Rent' },
    { emoji: '🛍️', name: 'Shopping' },
  ];

  return (
    <div className="w-72 bg-zinc-900 border-r border-white/10 flex flex-col h-screen overflow-hidden">
      {/* Logo */}
      <div className="px-8 py-8 flex items-center gap-x-3 border-b border-white/10">
        <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-3xl flex items-center justify-center shadow-xl shadow-emerald-500/30">
          <Wallet className="w-6 h-6 text-white" />
        </div>
        <span className="text-3xl font-bold tracking-tighter text-white">SmartSpend</span>
      </div>

      {/* Navigation */}
      <div className="px-4 py-8 flex-1 overflow-y-auto">
        <nav className="space-y-1.5">
          {navItems.map((item) => {
            const isActive = currentPage === item.page;
            return (
              <button
                key={item.page}
                onClick={() => onNavigate(item.page)}
                className={`w-full flex items-center gap-x-3.5 px-6 py-4 rounded-2xl font-medium text-sm transition-all group ${
                  isActive
                    ? 'bg-emerald-500/10 text-emerald-400'
                    : 'hover:bg-white/5 text-zinc-300'
                }`}
              >
                <item.icon
                  className={`w-5 h-5 transition-colors ${
                    isActive ? 'text-emerald-400' : 'text-zinc-400 group-hover:text-white'
                  }`}
                />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Quick Categories */}
        <div className="mt-12 px-6">
          <p className="text-xs font-medium tracking-widest text-zinc-500 mb-5">QUICK ADD</p>
          <div className="grid grid-cols-2 gap-3">
            {quickCategories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => {
                  onNavigate('expenses');
                  onQuickAdd?.(cat.name);
                }}
                className="bg-zinc-800 hover:bg-emerald-500/10 border border-white/5 hover:border-emerald-500/30 transition-all rounded-3xl p-5 text-left group"
              >
                <div className="text-2xl mb-2 group-active:scale-125 transition-transform">
                  {cat.emoji}
                </div>
                <div className="font-medium text-sm text-white">{cat.name}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* User Footer */}
      <div className="mt-auto p-6 border-t border-white/10">
        <div className="flex items-center gap-x-4">
          <div className="w-11 h-11 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-3xl flex items-center justify-center text-white font-semibold text-xl shadow-inner">
            DU
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-semibold text-white text-sm">Demo User</div>
            <div className="text-zinc-500 text-xs truncate">demo@smartspend.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;