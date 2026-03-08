import { useState } from 'react';
import { Wallet, Eye, EyeOff } from 'lucide-react';
import {FormInput} from '../components/ui/Input';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('demo@smartspend.com');
  const [password, setPassword] = useState('demo123');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      onLogin?.({ email });
    }, 800);
  };

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center bg-[radial-gradient(at_top_right,#10b98110_0%,transparent_70%)]">
      <div className="w-full max-w-md mx-4">
        {/* Logo Header */}
        <div className="flex justify-center items-center gap-x-4 mb-12">
          <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-3xl flex items-center justify-center shadow-2xl shadow-emerald-500/50">
            <Wallet className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl font-bold tracking-tighter text-white">SmartSpend</h1>
        </div>

        {/* Glass Card */}
        <div className="bg-zinc-900/70 border border-white/10 backdrop-blur-3xl rounded-3xl p-10 shadow-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold text-white">Welcome back</h2>
            <p className="text-zinc-400 mt-2">Sign in to track your money smarter</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* <div> */}
              <FormInput
            label = 'EMAIL ADDRESS'
              type='email'
              value={email}
              onChange={setEmail}
              placeholder = 'you@email.com'
              required
              fullWidth/>
               <div className="relative w-full">
                <label className="block text-xs font-medium tracking-widest text-zinc-400 mb-2">
    CREATE PASSWORD
  </label>
  <input
    type={showPassword ? "text" : "password"}
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    placeholder="••••••••"
    required
    className="w-full bg-zinc-950 border border-white/10 focus:border-emerald-500 rounded-2xl px-6 py-5 text-lg outline-none"
  />

  <button
    type="button"
    onClick={() => setShowPassword(!showPassword)}
    className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
  >
    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
  </button>
</div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 accent-emerald-500" />
                <span className="text-zinc-400">Remember me</span>
              </label>
              <a href="#" className="text-emerald-400 hover:text-emerald-300 font-medium">Forgot password?</a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-emerald-500 hover:bg-emerald-600 active:scale-[0.985] transition-all py-5 rounded-2xl font-semibold text-xl shadow-xl shadow-emerald-500/30 flex items-center justify-center gap-3"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>

            <div className="text-center text-sm text-zinc-400">
              Don&apos;t have an account?{' '}
              <span
                onClick={() => window.location.href = '/signup'}
                className="text-emerald-400 font-medium cursor-pointer hover:underline"
              >
                Create one for free
              </span>
            </div>
          </form>
        </div>

        <p className="text-center text-zinc-500 text-xs mt-8">© 2026 SmartSpend • Bank-level security</p>
      </div>
    </div>
  );
};

export default Login;