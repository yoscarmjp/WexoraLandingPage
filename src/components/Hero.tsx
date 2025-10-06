import { Download, ArrowRight, Sparkles, Lock } from 'lucide-react';
import { useCountdown } from '../contexts/CountdownContext';

export default function Hero() {
  const { isCountdownActive } = useCountdown();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950/50 via-black to-pink-950/30"></div>

      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-600/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <div className="relative max-w-7xl mt-8 flex flex-col mx-auto px-6 py-32 text-center z-10">
        <div className="inline-flex justify-center items-center space-x-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 group hover:border-purple-500/50 transition-all duration-300">
          <Sparkles size={16} className="text-purple-400" />
          <span className="text-sm text-gray-300">La revolución de las aplicaciones de comunicación limpia y optimizada</span>
        </div>

        <div className="mb-8 inline-block">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
            <h1 className="relative text-8xl md:text-9xl font-black mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 text-transparent bg-clip-text animate-gradient">
                Wexora
              </span>
            </h1>
          </div>
          <p className="text-gray-400 text-xl font-light">
            Conecta con tus amigos de una manera diferente
          </p>
        </div>

        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
          La próxima generación de
          <br />
          <span className="relative inline-block mt-2">
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 blur-2xl opacity-50"></span>
            <span className="relative bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 text-transparent bg-clip-text">
              comunicación instantánea
            </span>
          </span>
        </h2>

        <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
          Experimenta una nueva forma de conectar con tus amigos y comunidades.
          <br className="hidden md:block" />
          Diseñado para ser rápido, elegante y poderoso.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
        {isCountdownActive ? (
          <button disabled className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-5 rounded-2xl text-lg font-bold transition-all duration-300 flex items-center space-x-3 shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/80 hover:scale-105">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <Lock size={18} className="relative z-10" />
          <span className="relative z-10 font-semibold">Bloqueado</span>
        </button>
        ):(
          <a href='../setup/WexoraSetup.exe' className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-5 rounded-2xl text-lg font-bold transition-all duration-300 flex items-center space-x-3 shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/80 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <Download size={24} className="relative z-10" />
            <span className="relative z-10">Descargar ahora</span>
          </a>
        )}
          <a href='https://front.theoasiss.us/' className="group relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 text-white px-10 py-5 rounded-2xl text-lg font-bold transition-all duration-300 flex items-center space-x-3 hover:bg-white/10 hover:border-purple-500/50">
            <span>Ver demo</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>100% Gratis</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
            <span>Multiplataforma (Proximamente)</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none"></div>
    </section>
  );
}
