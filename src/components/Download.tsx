import { Download as DownloadIcon, Lock, Monitor, ArrowRight } from 'lucide-react';
import { useCountdown } from '../contexts/CountdownContext';

const platforms = [
  {
    icon: Monitor,
    name: 'Windows',
    description: 'Windows 10 o superior',
    gradient: 'from-blue-600 to-cyan-600'
  },
  {
    icon: Monitor,
    name: 'macOS',
    description: 'macOS 10.15 o superior',
    gradient: 'from-purple-600 to-pink-600'
  },
  {
    icon: Monitor,
    name: 'Linux',
    description: 'Debian, Ubuntu, Fedora',
    gradient: 'from-orange-600 to-red-600'
  },
];

export default function Download() {
  const { isCountdownActive } = useCountdown();
  
  return (
    <section id="download" className="relative py-32 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black"></div>

      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-6 py-2 mb-6">
            <span className="text-sm text-purple-400 font-semibold">DESCARGAS</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Disponible para
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
              todos tus dispositivos
            </span>
          </h2>
          <p className="text-gray-400 text-xl font-light">
            Descarga Exora y mantente conectado desde cualquier plataforma
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${platform.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

              <div className="relative">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${platform.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <platform.icon className="text-white" size={32} strokeWidth={2} />
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">
                  {platform.name === 'Linux' ? 'Linux (Próximamente)' : platform.name == 'macOS' ? 'macOS (Próximamente)' : platform.name}
                </h3>
                <p className="text-gray-400 mb-6 font-light">
                  {platform.description}
                </p>

                {isCountdownActive ? (
                  <button disabled className="w-full relative overflow-hidden bg-gray-600/50 backdrop-blur-xl border border-gray-500/50 text-gray-300 py-3.5 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 cursor-not-allowed opacity-60">
                    <Lock size={18} />
                    <span>Bloqueado</span>
                  </button>
                ) : platform.name !== 'Linux' && platform.name !== 'macOS' ? (
                  <a href='../setup/WexoraSetup.exe' className="w-full group/btn relative overflow-hidden bg-white/10 backdrop-blur-xl border border-white/20 text-white py-3.5 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 hover:bg-white/20 hover:border-purple-500/50">
                    <DownloadIcon size={18} />
                    <span>Descargar</span>
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                ) : (
                  <button disabled className="w-full group/btn relative overflow-hidden bg-white/10 backdrop-blur-xl border border-white/20 text-white py-3.5 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 hover:bg-white/20 hover:border-purple-500/50 opacity-50 cursor-not-allowed">
                    <DownloadIcon size={18} />
                    <span>Próximamente</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
          <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              ¿Prefieres no descargar nada?
            </h3>
            <p className="text-gray-400 mb-8 text-lg font-light max-w-2xl mx-auto">
              Accede a Exora directamente desde tu navegador sin necesidad de instalar nada.
              Mismas características, cero descargas.
            </p>
            {isCountdownActive ? (
              <button disabled className="group/btn inline-flex items-center space-x-3 bg-gray-600 text-gray-300 px-10 py-5 rounded-2xl text-lg font-bold transition-all duration-300 cursor-not-allowed opacity-60">
                <Lock size={20} />
                <span>Bloqueado hasta el lanzamiento</span>
              </button>
            ) : (
              <a href='https://front.theoasiss.us/' className="group/btn inline-flex items-center space-x-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-5 rounded-2xl text-lg font-bold transition-all duration-300 shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/80 hover:scale-105">
                <span>Abrir versión web</span>
                <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
