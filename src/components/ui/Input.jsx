import { Wallet, Eye, EyeOff } from 'lucide-react'; 
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

export default FormInput ;