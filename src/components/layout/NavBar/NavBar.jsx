import { Link } from 'react-router-dom';
import { Bell, Plus, Search, LogOut } from 'lucide-react';
import NavItem from './NavItem';

const SearchBar = () => {
  return (
    <div className="relative hidden md:block w-72">
          <input
            type="text"
            placeholder="Search transactions..."
            className="w-full bg-zinc-800 border border-white/10 focus:border-emerald-500 rounded-2xl pl-11 py-3 text-sm outline-none transition-all"
          />
          <Search className="absolute left-4 top-3.5 w-5 h-5 text-zinc-400" />
        </div>
  )
}

const NotificationBell = () => {
  return (
    <button className="relative text-xl text-zinc-400 hover:text-white transition-colors p-2">
          <Bell className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-rose-500 text-[10px] font-bold">3</span>
        </button>
  )
}

const NewTransactionButton = () => {
  return(
    <button
          // onClick={onNewTransaction}
          className="flex items-center gap-x-2 bg-emerald-500 hover:bg-emerald-600 active:scale-95 transition-all px-6 h-10 rounded-2xl font-semibold text-sm shadow-lg shadow-emerald-500/30"
        >
          <Plus className="w-5 h-5" />
          <span className="hidden md:inline">New Transaction</span>
        </button>
  )
  
}

const UserSection = () => {
  return (
    <div className="flex items-center gap-x-4 pl-6 border-l border-white/10">
          <div className="hidden sm:block text-right">
            <p className="text-sm font-medium text-white">ሰላም፣ ደሚሰው 👋</p>
            <p className="text-xs text-zinc-500">demo@smartspend.com</p>
          </div>

          <div className="w-9 h-9 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center text-white font-semibold text-lg cursor-pointer hover:scale-105 transition-transform">
            D
          </div>

          {/* Logout (beautiful icon) */}
          <button className="text-rose-400 hover:text-rose-300 transition-colors p-2" title="Logout">
            <LogOut className="w-5 h-5" />
          </button>
        </div>
  )
}

const Navbar = ({ pageTitle = "Dashboard", onNewTransaction }) => {
  return (
    <div className="h-16 border-b border-white/10 bg-zinc-900/80 backdrop-blur-xl px-6 md:px-8 flex items-center justify-between z-50" style={{position: "sticky", top: 0, zIndex: 1000, width: "100%"}}>

      {/* LEFT: Logo + Navigation Links (Best position - clean horizontal nav) */}
      <div className="flex items-center gap-x-10">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-x-3">
          <div className="w-9 h-9 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-xl shadow-emerald-500/30">
            <span className="text-white text-2xl">💰</span>
          </div>
          <span className="text-3xl font-bold tracking-tighter text-white">SmartSpend</span>
        </Link>

        {/* Navigation Links - Beautiful & Modern */}
        <div className="hidden md:flex items-center gap-x-8 text-sm font-medium">

          <NavItem to = "/dashboard" label = "Dashboard"/>
          <NavItem to = "/history" label = "History"/>
          <NavItem to = "/expense-form" label = "Expense"/>
          <NavItem to = "/signup" label = "Signup"/>
          <NavItem to = "/login" label = "Login"/>
          <NavItem to = "/expense-table" label = "ExpenseTable"/>
        </div>
      </div>

      {/* RIGHT: Search + Notifications + New Transaction + User */}
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