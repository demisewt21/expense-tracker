import React from 'react';

const ExpenseTable = () => {
  // Sample data
  const transactions = [
    { id: 1, amount: 200, category: 'ምግብ', description: 'ምሳ', date: '2024-05-20', type: 'expense' },
    { id: 2, amount: 500, category: 'ደሞዝ', description: 'Salary', date: '2024-05-21', type: 'income' },
    { id: 3, amount: 50, category: 'ትራንስፖርት', description: 'ታክሲ', date: '2024-05-20', type: 'expense' },
    { id: 4, amount: 300, category: 'ደሞዝ', description: 'Freelance', date: '2024-05-22', type: 'income' },
        { id: 1, amount: 200, category: 'ምግብ', description: 'ምሳ', date: '2024-05-20', type: 'expense' },
    { id: 2, amount: 500, category: 'ደሞዝ', description: 'Salary', date: '2024-05-21', type: 'income' },
    { id: 3, amount: 50, category: 'ትራንስፖርት', description: 'ታክሲ', date: '2024-05-20', type: 'expense' },
    { id: 4, amount: 300, category: 'ደሞዝ', description: 'Freelance', date: '2024-05-22', type: 'income' },
        { id: 1, amount: 200, category: 'ምግብ', description: 'ምሳ', date: '2024-05-20', type: 'expense' },
    { id: 2, amount: 500, category: 'ደሞዝ', description: 'Salary', date: '2024-05-21', type: 'income' },
    { id: 3, amount: 50, category: 'ትራንስፖርት', description: 'ታክሲ', date: '2024-05-20', type: 'expense' },
    { id: 4, amount: 300, category: 'ደሞዝ', description: 'Freelance', date: '2024-05-22', type: 'income' },
        { id: 1, amount: 200, category: 'ምግብ', description: 'ምሳ', date: '2024-05-20', type: 'expense' },
    { id: 2, amount: 500, category: 'ደሞዝ', description: 'Salary', date: '2024-05-21', type: 'income' },
    { id: 3, amount: 50, category: 'ትራንስፖርት', description: 'ታክሲ', date: '2024-05-20', type: 'expense' },
    { id: 4, amount: 300, category: 'ደሞዝ', description: 'Freelance', date: '2024-05-22', type: 'income' },
  ];

  return (
    <div className="bg-zinc-900 rounded-xl shadow-sm border overflow-hidden mt-8">
      <div className="bg-blue-950 p-4 border-b">
        <h3 className="font-semibold text-white text-lg">የቅርብ ጊዜ እንቅስቃሴዎች</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-sm font-medium text-zinc-400 border-b">
              <th className="p-4">ቀን</th>
              <th className="p-4">መግለጫ</th>
              <th className="p-4">ምድብ</th>
              <th className="p-4">መጠን</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((t) => (
              <tr key={t.id} className="border-b hover:bg-zinc-800 transition">
                <td className="p-4 text-sm text-zinc-400">{t.date}</td>
                <td className="p-4 text-sm font-medium text-white">{t.description}</td>
                <td className="p-4 text-sm">
                  <span className="bg-zinc-700 text-white px-2 py-1 rounded-full text-xs">
                    {t.category}
                  </span>
                </td>
                <td
                  className={`p-4 text-sm font-bold ${
                    t.type === 'income' ? 'text-emerald-500' : 'text-red-500'
                  }`}
                >
                  {t.type === 'income' ? `+${t.amount} ETB` : `-${t.amount} ETB`}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExpenseTable;