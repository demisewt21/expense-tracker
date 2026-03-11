const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      <div className="absolute w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-3xl animate-pulse top-[-100px] left-[-100px]"></div>

      <div className="absolute w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl animate-pulse bottom-[-120px] right-[-120px]"></div>

      <div className="absolute w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-3xl animate-pulse top-[40%] left-[40%]"></div>
    </div>
  );
};

export default AnimatedBackground;