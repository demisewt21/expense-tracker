import { useState } from 'react';
import { Plus } from 'lucide-react';

const ExpenseForm = ({ onAddTransaction }) => {
  const [type, setType] = useState('expense'); // 'expense' or 'income'
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount) return;

    const transaction = {
      id: Date.now(),
      date,
      desc: description || 'Untitled transaction',
      category,
      amount: type === 'income' ? parseFloat(amount) : -parseFloat(amount),
      type,
    };

    onAddTransaction(transaction);

    // Reset form
    setAmount('');
    setDescription('');
    setDate(new Date().toISOString().split('T')[0]);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-zinc-900 border border-white/10 rounded-3xl p-10">
        <h2 className="text-3xl font-semibold mb-8 tracking-tight">New Transaction</h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Type Toggle */}
          <div>
            <label className="block text-xs font-medium text-zinc-400 mb-3 tracking-widest">TYPE</label>
            <div className="grid grid-cols-2 border border-white/10 rounded-2xl overflow-hidden">
              <button
                type="button"
                onClick={() => setType('expense')}
                className={`py-4 font-semibold transition-all ${type === 'expense' ? 'bg-rose-500 text-white' : 'bg-zinc-900 text-zinc-400'}`}
              >
                EXPENSE
              </button>
              <button
                type="button"
                onClick={() => setType('income')}
                className={`py-4 font-semibold transition-all ${type === 'income' ? 'bg-emerald-500 text-white' : 'bg-zinc-900 text-zinc-400'}`}
              >
                INCOME
              </button>
            </div>
          </div>

          {/* Amount */}
          <div>
            <label className="block text-xs font-medium text-zinc-400 mb-2 tracking-widest">AMOUNT</label>
            <div className="relative">
              <span className="absolute left-6 top-4 text-3xl text-zinc-400">$</span>
              <input
                type="number"
                step="0.01"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
                className="w-full bg-zinc-950 border border-white/10 focus:border-emerald-500 rounded-2xl pl-12 py-5 text-4xl outline-none transition-all"
                required
              />
            </div>
          </div>

          {/* Category */}
          <div>
            <label className="block text-xs font-medium text-zinc-400 mb-2 tracking-widest">CATEGORY</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full bg-zinc-950 border border-white/10 focus:border-emerald-500 rounded-2xl px-6 py-5 text-lg outline-none"
            >
              <option value="Food">🍔 Food &amp; Dining</option>
              <option value="Transport">🚕 Transport</option>
              <option value="Rent">🏠 Rent &amp; Utilities</option>
              <option value="Shopping">🛍️ Shopping</option>
              <option value="Entertainment">🎥 Entertainment</option>
              <option value="Salary">💰 Salary</option>
              <option value="Bills">📄 Bills</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs font-medium text-zinc-400 mb-2 tracking-widest">DESCRIPTION</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Starbucks coffee..."
              className="w-full bg-zinc-950 border border-white/10 focus:border-emerald-500 rounded-2xl px-6 py-5 outline-none"
            />
          </div>

          {/* Date */}
          <div>
            <label className="block text-xs font-medium text-zinc-400 mb-2 tracking-widest">DATE</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full bg-zinc-950 border border-white/10 focus:border-emerald-500 rounded-2xl px-6 py-5 outline-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-emerald-500 hover:bg-emerald-600 active:scale-[0.985] transition-all py-6 rounded-2xl font-semibold text-lg flex items-center justify-center gap-x-3 shadow-xl shadow-emerald-500/30"
          >
            <Plus className="w-6 h-6" />
            SAVE TRANSACTION
          </button>
        </form>
      </div>
    </div>
  );
};

export default ExpenseForm;