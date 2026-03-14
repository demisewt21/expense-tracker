import { useState, useEffect } from 'react';
import { Download, Search } from 'lucide-react';
import { SummaryCard, Table} from '../components/ui/Input';
import { getTransactions } from '../services/transactionService';   // ←←← THIS IS THE ONLY NEW IMPORT

const History = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all'); // all, income, expense

  // Fetch real transactions from backend
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const data = await getTransactions();
        
        // Transform backend data to match your existing UI format
        const transformed = data.map(t => ({
          id: t.id,
          date: t.date,
          desc: t.description || '',
          category: t.category_name || '',
          amount: t.type === 'income' ? parseFloat(t.amount) : -parseFloat(t.amount)
        }));

        setTransactions(transformed);
      } catch (err) {
        alert('❌ Failed to load transactions: ' + (err.response?.data?.message || err.message));
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  const filteredTransactions = transactions
    .filter((t) => {
      const matchesSearch = t.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            t.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = filterType === 'all' ||
                          (filterType === 'income' && t.amount > 0) ||
                          (filterType === 'expense' && t.amount < 0);
      return matchesSearch && matchesType;
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  const totalIncome = filteredTransactions
    .filter(t => t.amount > 0)
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpense = filteredTransactions
    .filter(t => t.amount < 0)
    .reduce((sum, t) => sum + Math.abs(t.amount), 0);

  return (
    <div className="p-6 md:p-8 min-h-[calc(100vh-4rem)] overflow-auto">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
          <div>
            <h2 className="text-4xl font-semibold tracking-tighter text-white">Transaction History</h2>
            <p className="text-zinc-400 mt-1">Every penny, perfectly organized</p>
          </div>

          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search description or category..."
                className="bg-zinc-900 border border-white/10 focus:border-emerald-500 w-80 pl-12 py-4 rounded-2xl text-sm outline-none transition-all"
              />
              <Search className="absolute left-5 top-4 w-5 h-5 text-zinc-400" />
            </div>

            {/* Filter */}
            <div className="flex border border-white/10 rounded-2xl overflow-hidden">
              {['all', 'income', 'expense'].map((type) => (
                <button
                  key={type}
                  onClick={() => setFilterType(type)}
                  className={`px-6 py-4 text-sm font-medium transition-all capitalize ${filterType === type ? 'bg-emerald-500 text-white' : 'bg-zinc-900 text-zinc-400 hover:bg-white/5'}`}
                >
                  {type}
                </button>
              ))}
            </div>

            {/* Export Button */}
            <button
              onClick={() => alert('✅ CSV exported successfully!')}
              className="flex items-center gap-3 bg-zinc-900 hover:bg-white/5 border border-white/10 px-7 py-4 rounded-2xl font-medium transition-all"
            >
              <Download className="w-5 h-5" />
              Export CSV
            </button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <SummaryCard
            title="FILTERED INCOME"
            amount={totalIncome}
            color="emerald"
          />
          <SummaryCard
            title="FILTERED EXPENSES"
            amount={totalExpense}
            color="rose"
          />
          <SummaryCard
            title="NET IN THIS VIEW"
            amount={totalIncome - totalExpense}
            color="White"
          />
        </div>

        {/* Beautiful Table */}
        <div className="bg-zinc-900 border border-white/10 rounded-3xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
              <Table label="DATE"/>
              <Table label="DESCRIPTION"/>
              <Table label="CATEGORY"/>
              <Table label="AMOUNT"/>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {loading ? (
                <tr>
                  <td colSpan="4" className="py-20 text-center text-zinc-400">
                    Loading transactions...
                  </td>
                </tr>
              ) : filteredTransactions.length > 0 ? (
                filteredTransactions.map((t, i) => (
                  <tr key={i} className="group hover:bg-emerald-500/5 transition-colors">
                    <td className="py-7 px-8 text-sm text-zinc-300">{t.date}</td>
                    <td className="py-7 px-8 font-medium text-white">{t.desc}</td>
                    <td className="py-7 px-8">
                      <span className="inline-block px-5 py-1 text-xs rounded-2xl bg-white/5 text-zinc-400">
                        {t.category}
                      </span>
                    </td>
                    <td className={`py-7 px-8 text-right font-semibold tabular-nums ${t.amount > 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {t.amount > 0 ? '+' : ''}${Math.abs(t.amount).toFixed(2)}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="py-20 text-center text-zinc-400">
                    No transactions found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default History;