import { useState } from 'react';
import { Wallet, Eye, EyeOff } from 'lucide-react';
import {FormInput} from '../components/ui/Input';
import { register } from '../services/authService';   // ←←← THIS IS THE ONLY NEW IMPORT

const Signup = ({ onSignup }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Combine first + last name into username (matches your backend table)
      const username = `${firstName.toLowerCase()}${lastName.toLowerCase()}`;

      await register({ username, email, password });
      
      alert('✅ Account created successfully! Redirecting to login...');
      window.location.href = '/login';   // same style you already use

    } catch (err) {
      alert('❌ Signup failed: ' + (err.response?.data?.message || err.message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(at_top_right,#10b98110_0%,transparent_70%)]">
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
            <h2 className="text-3xl font-semibold text-white">Create your account</h2>
            <p className="text-zinc-400 mt-2">Start controlling your finances in seconds</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              <FormInput 
              label = 'First Name'
              type='text'
              value={firstName}
              onChange={setFirstName}
              placeholder = 'Alex'
              required/>
              <FormInput 
              label = 'Last Name'
              type='text'
              value={lastName}
              onChange={setLastName}
              placeholder = 'Hailu'
              required/>
            </div>
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
          
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-white text-zinc-950 hover:bg-zinc-100 active:scale-[0.985] transition-all py-5 rounded-2xl font-semibold text-xl shadow-xl flex items-center justify-center gap-3"
            >
              {loading ? 'Creating account...' : 'Create Free Account'}
            </button>

            <div className="text-center text-sm text-zinc-400">
              Already have an account?{' '}
              <span
                onClick={() => window.location.href = '/login'}
                className="text-emerald-400 font-medium cursor-pointer hover:underline"
              >
                Sign in here
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;