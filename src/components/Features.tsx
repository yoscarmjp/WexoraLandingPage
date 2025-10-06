import { Users, MessageSquare, Shield, Zap, Globe, Lock } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Grupos organizados',
    description: 'Crea y gestiona múltiples grupos con tus amigos, cada uno con su propio espacio de conversación.',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: MessageSquare,
    title: 'Chat en tiempo real',
    description: 'Mensajería instantánea con actualizaciones en vivo. Nunca pierdas el hilo de la conversación.',
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    icon: Shield,
    title: 'Privacidad y seguridad',
    description: 'Tus conversaciones están protegidas. Control total sobre quién puede unirse a tus grupos.',
    gradient: 'from-purple-500 to-violet-500'
  },
  {
    icon: Zap,
    title: 'Rápido y eficiente',
    description: 'Diseñado para ser ultrarrápido. Interfaz fluida que no ralentiza tu experiencia.',
    gradient: 'from-violet-500 to-purple-500'
  },
  {
    icon: Globe,
    title: 'Disponible en todas partes',
    description: 'Accede desde cualquier dispositivo. Sincronización automática en todos tus dispositivos.',
    gradient: 'from-fuchsia-500 to-pink-500'
  },
  {
    icon: Lock,
    title: 'Control de estados',
    description: 'Gestiona tu estado de conexión. Decide cuándo estar disponible o desconectado.',
    gradient: 'from-pink-500 to-purple-500'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-32 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black"></div>

      <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-6 py-2 mb-6">
            <span className="text-sm text-purple-400 font-semibold">CARACTERÍSTICAS</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Todo lo que necesitas
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
              en un solo lugar
            </span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto font-light">
            Herramientas poderosas diseñadas para mejorar tu experiencia de comunicación
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

              <div className="absolute -right-8 -top-8 w-32 h-32 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="text-white" size={28} strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
