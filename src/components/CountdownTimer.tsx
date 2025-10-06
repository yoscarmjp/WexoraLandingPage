import { Clock, X } from 'lucide-react';
import { useCountdown } from '../contexts/CountdownContext';

export default function CountdownTimer() {
  const { isCountdownActive, timeRemaining, isDismissed, dismissCountdown, showCountdown } = useCountdown();

  if (!isCountdownActive) {
    return null;
  }

  // Solo mostrar la versión compacta en la esquina inferior izquierda
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
