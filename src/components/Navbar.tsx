import { Download, Menu, X, Lock } from 'lucide-react';
import { useState } from 'react';
import { useCountdown } from '../contexts/CountdownContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isCountdownActive } = useCountdown();

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 20);
    });
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-black/40 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-purple-500/5'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
              <div className="relative text-white text-3xl font-bold">
                <img src="../images/logo.png" alt="" />
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="relative text-gray-300 hover:text-white transition-colors group"
            >
              <span>Características</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#download"
              className="relative text-gray-300 hover:text-white transition-colors group"
            >
              <span>Descargar</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#about"
              className="relative text-gray-300 hover:text-white transition-colors group"
            >
              <span>Acerca de</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            {isCountdownActive ? (
              <button disabled className="relative group overflow-hidden bg-gray-600 text-gray-300 px-6 py-2.5 rounded-xl transition-all duration-300 flex items-center space-x-2 cursor-not-allowed opacity-60">
                <Lock size={18} className="relative z-10" />
                <span className="relative z-10 font-semibold">Bloqueado</span>
              </button>
            ) : (
              <a href='../setup/WexoraSetupV1.exe' className="relative group overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2.5 rounded-xl transition-all duration-300 flex items-center space-x-2 shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Download size={18} className="relative z-10" />
                <span className="relative z-10 font-semibold">Descargar</span>
              </a>
            )}
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10">
            <div className="flex flex-col space-y-4 pt-4">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">
                Características
              </a>
              <a href="#download" className="text-gray-300 hover:text-white transition-colors">
                Descargar
              </a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                Acerca de
              </a>
              {isCountdownActive ? (
                <button disabled className="bg-gray-600 text-gray-300 px-6 py-2.5 rounded-xl flex items-center justify-center space-x-2 cursor-not-allowed opacity-60">
                  <Lock size={18} />
                  <span>Bloqueado</span>
                </button>
              ) : (
                <a href='../setup/WexoraSetupV1.exe' className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2.5 rounded-xl flex items-center justify-center space-x-2">
                  <Download size={18} />
                  <span>Descargar App</span>
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
