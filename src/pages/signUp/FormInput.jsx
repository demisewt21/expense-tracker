const FormInput = ({label, type, value, onChange, placeholder, required}) => {
    return (
        
        <div>
                <label className="block text-xs font-medium tracking-widest text-zinc-400 mb-2">{label}</label>
                <input
                  type={type}
                  value={value}
                  onChange={(e) => onChange(e.target.value)}
                  className="w-full bg-zinc-950 border border-white/10 focus:border-emerald-500 rounded-2xl px-6 py-5 text-lg outline-none transition-all"
                  placeholder={placeholder}
                  required = {required}
                />
              </div>
    )

}

const FormEmail = ({label, type, value, onChange, placeholder, required}) => {
    return (
        <div>
              <label className="block text-xs font-medium tracking-widest text-zinc-400 mb-2">{label}</label>
              <input
                type="type"
                value={value}
                onChange={(e) => onchange(e.target.value)}
                className="w-full bg-zinc-950 border border-white/10 focus:border-emerald-500 rounded-2xl px-6 py-5 text-lg outline-none transition-all"
                placeholder={placeholder}
                required = {required}
              />
            </div>
    )
}

export {FormInput, FormEmail};
