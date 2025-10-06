// Component without unused imports

export default function Preview() {
  return (
    <section className="relative py-32 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black"></div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-6 py-2 mb-6">
            <span className="text-sm text-purple-400 font-semibold">INTERFAZ</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Diseño elegante y
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
              minimalista
            </span>
          </h2>
          <p className="text-gray-400 text-xl font-light">
            Una experiencia visual que hace que comunicarte sea un placer
          </p>
        </div>

        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>

          <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-3 border border-white/20 shadow-2xl">
            <div className="bg-black/80 rounded-2xl overflow-hidden border border-white/10">
              <img src="../images/preview.png" alt="Preview" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
