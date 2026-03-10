const FormInput = ({ label, type, value, onChange, placeholder, required, fullWidth, icon }) => {
  return (
    <div className={fullWidth ? "col-span-2" : ""}>
      <label className="block text-xs font-medium tracking-widest text-zinc-400 mb-2">{label}</label>
      <div className="relative w-full">
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          className="w-full bg-zinc-950 border border-white/10 focus:border-emerald-500 rounded-2xl px-6 py-5 text-lg outline-none"
        />
        {icon && <div className="absolute right-4 top-1/2 -translate-y-1/2">{icon}</div>}
      </div>
    </div>
  );
};

const  SummaryCard = ({ title, amount = 0, color }) => {
  // const textColor = color === "white" ? "text-white" : `text-${color}-400`;
  return (
    <div className="bg-zinc-900 border border-white/10 rounded-3xl p-7">
      
      <div className={`text-${color}-400 text-xs tracking-widest`}>
        {title}
      </div>

      <div className={`text-4xl font-semibold text-${color}-400 mt-3 tabular-nums`}>
        ${Number(amount).toFixed(2)}
      </div>

    </div>
  );
}

const Table = ({label}) => {
  return (
    <th className="text-left py-7 px-8 text-xs font-medium tracking-widest text-zinc-400">{label}</th>
  )
}

const ExpenseInput = ({label, type, value, onChange, required, placeholder, icon, textSize}) => {
  return (
    <div>
            <label className="block text-xs font-medium text-zinc-400 mb-2 tracking-widest">{label}</label>
            <div className="relative">
              <span className="absolute left-6 top-4 text-3xl text-zinc-400">{icon}</span>
              <input
                type={type}
                step={0.01}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`w-full bg-zinc-950 border border-white/10 focus:border-emerald-500 rounded-2xl pl-12 py-5 text-4xl ${textSize} outline-none transition-all`}
                required={required}
              />
            </div>
          </div>
  )
}

// const TypeOfTransaction = ({label, type, onClick, TransactionType}) => {
//   return (
//     <div>
//             {/* <label className="block text-xs font-medium text-zinc-400 mb-3 tracking-widest">{label}</label> */}
//             {/* <div className="grid grid-cols-2 border border-white/10 rounded-2xl overflow-hidden"> */}
//               <button
//                 type={type}
//                 TransactionType = {TransactionType}
//                 onClick={onClick}
//                 className={`py-4 font-semibold transition-all ${TransactionType === 'expense' ? 'bg-rose-500 text-white' : 'bg-zinc-900 text-zinc-400'}`}
//               >
//                 {label}
                
//               </button>
              
//               </div>
//               // </div>
//   )
// }


export {FormInput, SummaryCard, Table, ExpenseInput} ;