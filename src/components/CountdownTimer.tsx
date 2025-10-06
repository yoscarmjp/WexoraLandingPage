import { Clock, X } from 'lucide-react';
import { useCountdown } from '../contexts/CountdownContext';

export default function CountdownTimer() {
  const { isCountdownActive, timeRemaining, isDismissed, dismissCountdown, showCountdown } = useCountdown();

  if (!isCountdownActive) {
    return null;
  }

  // Versión compacta en la esquina inferior izquierda
  if (isDismissed) {
    return (
      <div 
        className="fixed bottom-2 left-6 z-40 cursor-pointer group"
        onClick={showCountdown}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur-lg opacity-50 group-hover:opacity-70 transition-opacity"></div>
          <div className="relative bg-black/90 backdrop-blur-xl border border-purple-500/50 rounded-xl p-3 shadow-xl hover:scale-105 transition-transform">
            <div className="flex items-center space-x-2 mb-2">
              <Clock className="text-purple-400" size={16} />
              <span className="text-xs font-bold text-white">Lanzamiento</span>
            </div>
            <div className="flex items-center space-x-2 text-white font-bold">
              <div className="text-center">
                <div className="text-lg">{String(timeRemaining.days).padStart(2, '0')}</div>
                <div className="text-[8px] text-gray-400">días</div>
              </div>
              <span className="text-purple-400">:</span>
              <div className="text-center">
                <div className="text-lg">{String(timeRemaining.hours).padStart(2, '0')}</div>
                <div className="text-[8px] text-gray-400">hrs</div>
              </div>
              <span className="text-purple-400">:</span>
              <div className="text-center">
                <div className="text-lg">{String(timeRemaining.minutes).padStart(2, '0')}</div>
                <div className="text-[8px] text-gray-400">min</div>
              </div>
              <span className="text-purple-400">:</span>
              <div className="text-center">
                <div className="text-lg">{String(timeRemaining.seconds).padStart(2, '0')}</div>
                <div className="text-[8px] text-gray-400">seg</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Versión completa en la parte superior
  return (
    <div className="fixed top-30 left-1/2 transform -translate-x-1/2 z-40 w-full max-w-4xl px-6">
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
        <div className="relative bg-black/90 backdrop-blur-xl border border-purple-500/50 rounded-2xl p-6 shadow-2xl">
          {/* Botón de cerrar */}
          <button
            onClick={dismissCountdown}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors hover:bg-white/10 rounded-lg p-2"
            aria-label="Cerrar contador"
          >
            <X size={20} />
          </button>

          <div className="flex items-center justify-center mb-4">
            <Clock className="text-purple-400 mr-2" size={24} />
            <h3 className="text-xl font-bold text-white">
              Lanzamiento en:
            </h3>
          </div>
          
          <div className="grid grid-cols-4 gap-4">
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl p-4 mb-2">
                <div className="text-4xl font-black text-white">
                  {String(timeRemaining.days).padStart(2, '0')}
                </div>
              </div>
              <div className="text-sm text-gray-400 font-semibold">Días</div>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl p-4 mb-2">
                <div className="text-4xl font-black text-white">
                  {String(timeRemaining.hours).padStart(2, '0')}
                </div>
              </div>
              <div className="text-sm text-gray-400 font-semibold">Horas</div>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl p-4 mb-2">
                <div className="text-4xl font-black text-white">
                  {String(timeRemaining.minutes).padStart(2, '0')}
                </div>
              </div>
              <div className="text-sm text-gray-400 font-semibold">Minutos</div>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl p-4 mb-2">
                <div className="text-4xl font-black text-white">
                  {String(timeRemaining.seconds).padStart(2, '0')}
                </div>
              </div>
              <div className="text-sm text-gray-400 font-semibold">Segundos</div>
            </div>
          </div>

          <p className="text-center text-gray-400 mt-4 text-sm">
            Las descargas estarán disponibles cuando el contador llegue a cero
          </p>
        </div>
      </div>
    </div>
  );
}
