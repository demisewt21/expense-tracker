import React from 'react';

const ExpenseTable = () => {
  // ለጊዜው በሙከራ ዳታ (Dummy Data) እንሙላው
  const transactions = [
    { id: 1, amount: 200, category: 'ምግብ', description: 'ምሳ', date: '2024-05-20' },
    { id: 2, amount: 50, category: 'ትራንስፖርት', description: 'ታክሲ', date: '2024-05-20' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border overflow-hidden mt-8">
      <div className="p-4 border-b bg-gray-50">
        <h3 className="font-semibold text-gray-800">የቅርብ ጊዜ እንቅስቃሴዎች</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-sm font-medium text-gray-500 border-b">
              <th className="p-4">ቀን</th>
              <th className="p-4">መግለጫ</th>
              <th className="p-4">ምድብ</th>
              <th className="p-4">መጠን</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((t) => (
              <tr key={t.id} className="border-b hover:bg-gray-50 transition">
                <td className="p-4 text-sm text-gray-600">{t.date}</td>
                <td className="p-4 text-sm font-medium text-gray-800">{t.description}</td>
                <td className="p-4 text-sm">
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                    {t.category}
                  </span>
                </td>
                <td className="p-4 text-sm font-bold text-red-600">-{t.amount} ETB</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExpenseTable;