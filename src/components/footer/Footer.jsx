import { Link } from 'react-router-dom';
import { Heart, Github, Twitter, Linkedin } from 'lucide-react';

const QuickLinks = ({to,label}) => {
  return (
    <Link 
              to={to} 
              className="text-zinc-400 hover:text-white transition-colors"
            >
              {label}
            </Link>
  )
}

const SocialIcons = ({ href }) => {
  return (
    <a
      href={href}                 // external link
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-emerald-400 transition-colors"
      aria-label="GitHub"
    >
      <Github className="w-5 h-5" />
    </a>
  );
};
const Footer = () => {
  return (
    <footer className="bg-zinc-900 border-t border-white/10 py-8 px-6 md:px-8 mt-auto flex-1">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Left: Copyright + Made in Ethiopia */}
          <div className="flex items-center gap-x-3 text-sm text-zinc-400">
            <span>© 2026 SmartSpend</span>
            <span className="text-zinc-500">•</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-rose-500 fill-rose-500" /> in Ethiopia 🇪🇹
            </span>
          </div>

          {/* Center: Quick Links */}
          <div className="flex items-center gap-x-8 text-sm">
            <QuickLinks to = "/dashboard" label = "Dashboard"/>
            <QuickLinks to = "/history" label = "History"/>
            <QuickLinks to = "/expense-form" label = "Expenses"/>
            
          </div>

          {/* Right: Social Icons + Legal */}
          <div className="flex items-center gap-x-6">
            <div className="flex gap-x-5 text-zinc-400">
              <SocialIcons to = "https://github.com/demisewt21/Demisew" />

              <Link to="https://github.com/demisewt21/Demisew" className="hover:text-emerald-400 transition-colors" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </Link>


              <a href="#" className="hover:text-emerald-400 transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-emerald-400 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            <div className="flex items-center gap-x-4 text-xs text-zinc-500 border-l border-white/10 pl-6">
              <Link to="/privacy" className="hover:text-zinc-300 transition-colors">Privacy</Link>
              <Link to="/terms" className="hover:text-zinc-300 transition-colors">Terms</Link>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-8 pt-6 border-t border-white/10 text-center text-[10px] text-zinc-500 tracking-widest">
          SECURE • PRIVATE • BUILT FOR YOU
        </div>
      </div>
    </footer>
  );
};

export default Footer;