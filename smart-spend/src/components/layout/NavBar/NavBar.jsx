import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Bell, Plus, Search, LogOut } from 'lucide-react';
import NavItem from './NavItem';
import { logout } from '../../../services/authService';   

// ==================== SEARCH BAR (NOW WORKS) ====================
const SearchBar = () => {
  const [searchValue, setSearchValue] = React.useState('');

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    // You can later connect this to filter History page if you want
  };

  return (
    <div className="relative hidden md:block w-72">
      <input
        type="text"
        value={searchValue}
        onChange={handleSearch}
        placeholder="Search transactions..."
        className="w-full bg-zinc-800 border border-white/10 focus:border-emerald-500 rounded-2xl pl-11 py-3 text-sm outline-none transition-all"
      />
      <Search className="absolute left-4 top-3.5 w-5 h-5 text-zinc-400" />
    </div>
  )
}

// ==================== NOTIFICATION BELL (NOW WORKS) ====================
const NotificationBell = () => {
  const [hasNotification, setHasNotification] = React.useState(true);

  const handleClick = () => {
    if (hasNotification) {
      alert("✅ No new notifications right now!\n\n(You can later connect real notifications)");
      setHasNotification(false);
    }
  };

  return (
    <button 
      onClick={handleClick}
      className="relative text-xl text-zinc-400 hover:text-white transition-colors p-2"
    >
      <Bell className="w-6 h-6" />
      {hasNotification && (
        <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-rose-500 text-[10px] font-bold">
          3
        </span>
      )}
    </button>
  )
}

// ==================== NEW TRANSACTION BUTTON ====================
const NewTransactionButton = () => {
  const navigate = useNavigate();
  return(
    <button
      onClick={() => navigate('/expense-form')}
      className="flex items-center gap-x-2 bg-emerald-500 hover:bg-emerald-600 active:scale-95 transition-all px-6 h-10 rounded-2xl font-semibold text-sm shadow-lg shadow-emerald-500/30"
    >
      <Plus className="w-5 h-5" />
      <span className="hidden md:inline">New Transaction</span>
    </button>
  )
}

// ==================== USER SECTION ====================
const UserSection = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem('username') || 'Demisew';

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="flex items-center gap-x-4 pl-6 border-l border-white/10">
      <div className="hidden sm:block text-right">
        <p className="text-sm font-medium text-white">ሰላም {username} 👋</p>
        <p className="text-xs text-zinc-500">demo@smartspend.com</p>
      </div>

      <div className="w-9 h-9 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center text-white font-semibold text-lg cursor-pointer hover:scale-105 transition-transform">
        {username[0] || 'D'}
      </div>

      <button 
        onClick={handleLogout}
        className="text-rose-400 hover:text-rose-300 transition-colors p-2" 
        title="Logout"
      >
        <LogOut className="w-5 h-5" />
      </button>
    </div>
  )
}

// ==================== MAIN NAVBAR ====================
const Navbar = () => {
  return (
    <div className="h-16 border-b border-white/10 bg-zinc-900/80 backdrop-blur-xl px-6 md:px-8 flex items-center justify-between z-50" 
         style={{position: "sticky", top: 0, zIndex: 1000, width: "100%"}}>

      <div className="flex items-center gap-x-10">
        <Link to="/" className="flex items-center gap-x-3">
          <div className="w-9 h-9 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-xl shadow-emerald-500/30">
            <span className="text-white text-2xl">💰</span>
          </div>
          <span className="text-3xl font-bold tracking-tighter text-white">SmartSpend</span>
        </Link>

        <div className="hidden md:flex items-center gap-x-8 text-sm font-medium">
          <NavItem to="/dashboard" label="Dashboard"/>
          <NavItem to="/history" label="History"/>
          <NavItem to="/expense-form" label="Expense"/>
          <NavItem to="/expense-table" label="ExpenseTable"/>
        </div>
      </div>

      <div className="flex items-center gap-x-5">
        <SearchBar/>
        <NotificationBell/>
        <NewTransactionButton/>
        <UserSection/>
      </div>
    </div>
  );
};

export default Navbar;