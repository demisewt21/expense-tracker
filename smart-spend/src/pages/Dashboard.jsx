import { useState, useEffect } from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { getDashboardData, getTransactions } from '../services/transactionService';   // ←←← THIS IS THE ONLY NEW IMPORT

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [recentTransactions, setRecentTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch real data from backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        // 1. Get balance + totals + category breakdown
        const dash = await getDashboardData();
        setDashboardData(dash);

        // 2. Get transactions for recent activity
        const trans = await getTransactions();
        const transformed = trans.map(t => ({
          id: t.id,
          date: t.date,
          desc: t.description || '',
          category: t.category_name || '',
          amount: t.type === 'income' ? parseFloat(t.amount) : -parseFloat(t.amount)
        })).sort((a, b) => new Date(b.date) - new Date(a.date));

        setRecentTransactions(transformed.slice(0, 4));
      } catch (err) {
        alert('❌ Failed to load dashboard: ' + (err.response?.data?.message || err.message));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Use real backend numbers (fallback to 0 while loading)
  const totalIncome = dashboardData?.totalIncome || 0;
  const totalExpense = dashboardData?.totalExpense || 0;
  const balance = dashboardData?.balance || 0;

  return (
    <div className="p-6 md:p-8 min-h-[calc(100vh-4rem)] overflow-auto">
      {/* Greeting + Balance */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
        <div>
          <p className="text-emerald-400 text-sm font-medium tracking-[2px]">GOOD EVENING, Demisew 👋</p>
          <h2 className="text-5xl font-semibold tracking-tighter text-white mt-1">
            Your financial overview
          </h2>
        </div>
        
        <div className="mt-6 md:mt-0 text-right">
          <p className="text-xs uppercase tracking-widest text-zinc-400">CURRENT BALANCE</p>
          <p className="text-6xl font-semibold text-emerald-400 tabular-nums">
            ${balance.toFixed(2)}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Income & Expense Cards */}
        <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Income Card */}
          <div className="bg-zinc-900/70 border border-white/10 rounded-3xl p-8 hover:-translate-y-1 transition-all duration-300">
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center gap-x-3 text-emerald-400">
                  <ArrowUp className="w-6 h-6" />
                  <span className="font-medium tracking-widest text-sm">TOTAL INCOME</span>
                </div>
                <p className="text-4xl font-semibold mt-4 tabular-nums">${totalIncome}</p>
              </div>
              <div className="text-7xl opacity-10 text-emerald-400">↑</div>
            </div>
            <p className="text-emerald-400 text-sm mt-8 flex items-center gap-1">
              <span className="text-green-400">↑18.4%</span> from last month
            </p>
          </div>

          {/* Expense Card */}
          <div className="bg-zinc-900/70 border border-white/10 rounded-3xl p-8 hover:-translate-y-1 transition-all duration-300">
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center gap-x-3 text-rose-400">
                  <ArrowDown className="w-6 h-6" />
                  <span className="font-medium tracking-widest text-sm">TOTAL EXPENSES</span>
                </div>
                <p className="text-4xl font-semibold mt-4 tabular-nums">${totalExpense}</p>
              </div>
              <div className="text-7xl opacity-10 text-rose-400">↓</div>
            </div>
            <p className="text-rose-400 text-sm mt-8 flex items-center gap-1">
              <span className="text-rose-400">↓4.2%</span> from last month
            </p>
          </div>
        </div>

        {/* Spending Pie (SVG placeholder – replace with Recharts later) */}
        <div className="lg:col-span-7 bg-zinc-900 border border-white/10 rounded-3xl p-8">
          <div className="flex justify-between mb-6">
            <h3 className="font-semibold">Spending by Category</h3>
            <span className="text-xs bg-white/5 px-4 py-1 rounded-xl">This Month</span>
          </div>
          <div className="flex items-center justify-center h-80">
            <div className="relative w-64 h-64">
              <svg className="w-full h-full -rotate-12" viewBox="0 0 42 42">
                <circle cx="21" cy="21" r="15" fill="none" stroke="#27272a" strokeWidth="8" />
                <circle cx="21" cy="21" r="15" fill="none" stroke="#10b981" strokeWidth="8"
                  strokeDasharray="94 94" strokeDashoffset="18" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <div className="text-6xl font-bold text-emerald-400">62%</div>
                <div className="text-xs tracking-widest text-zinc-400 mt-2">FOOD &amp; DINING</div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="lg:col-span-5 bg-zinc-900 border border-white/10 rounded-3xl p-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-semibold">Recent Activity</h3>
            <span className="text-emerald-400 text-sm cursor-pointer hover:underline">View all →</span>
          </div>
          
          <div className="space-y-6">
            {loading ? (
              <p className="text-zinc-500 text-center py-8">Loading dashboard...</p>
            ) : recentTransactions.length > 0 ? (
              recentTransactions.map((t, i) => (
                <div key={i} className="flex justify-between items-center">
                  <div>
                    <div className="font-medium text-white">{t.desc}</div>
                    <div className="text-xs text-zinc-500">{t.date} • {t.category}</div>
                  </div>
                  <div className={`font-semibold tabular-nums ${t.amount > 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {t.amount > 0 ? '+' : ''}${Math.abs(t.amount).toFixed(2)}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-zinc-500 text-center py-8">No transactions yet</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;