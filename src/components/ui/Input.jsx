import { Wallet, Eye, EyeOff, Icon } from 'lucide-react'; 
// import Signup from '../../pages/Signup';        
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
  const textColor = color === "white" ? "text-white" : `text-${color}-400`;
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



// const StatsCard = ({ 
//   title, 
//   amount = 0, 
//   color, 
//   Icon, 
//   trend, 
//   trendText 
// }) => {
//   // Tailwind color classes
//   const textColor = color === "white" ? "text-white" : `text-${color}-400`;
//   const trendColor = trend.startsWith("↑") ? "text-green-400" : "text-rose-400";

//   return (
//     <div className="bg-zinc-900/70 border border-white/10 rounded-3xl p-8 hover:-translate-y-1 transition-all duration-300">
//       <div className="flex justify-between items-start">
//         <div>
//           <div className={`flex items-center gap-x-3 ${textColor}`}>
//             {Icon && <Icon className="w-6 h-6" />}
//             <span className="font-medium tracking-widest text-sm">{title}</span>
//           </div>
//           <p className="text-4xl font-semibold mt-4 tabular-nums">${Number(amount).toFixed(2)}</p>
//         </div>
//         <div className={`text-7xl opacity-10 ${textColor}`}>
//           {trend.startsWith("↑") ? "↑" : "↓"}
//         </div>
//       </div>
//       <p className={`text-sm mt-8 flex items-center gap-1 ${textColor}`}>
//         <span className={trendColor}>{trend}</span> {trendText}
//       </p>
//     </div>
//   );
// };


  
// const Button = ({showPassword, setShowPassword}) => {
//     return (
//         <div>
//             <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-6 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
//                 >
//                   {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
//                 </button>
//         </div>
//     )
// }

export {FormInput, SummaryCard, Table} ;