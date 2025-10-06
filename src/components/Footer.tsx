export default function Footer() {
  return (
    <footer id="about" className="bg-slate-950 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="text-white text-3xl font-bold">
                <img src="../images/logo.png" alt="" />
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              La plataforma de comunicación diseñada para conectar comunidades de manera simple y efectiva.
            </p>
            <p className="text-gray-500 text-sm">
              &copy; 2025 Wexora. Todos los derechos reservados.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Producto</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-400 hover:text-white transition-colors">
                  Características
                </a>
              </li>
              <li>
                <a href="#download" className="text-gray-400 hover:text-white transition-colors">
                  Descargas
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Actualizaciones
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Soporte</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Centro de ayuda
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Contacto
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Privacidad
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-gray-500 text-sm">
          <p>Construido con tecnología moderna para una experiencia de comunicación superior</p>
        </div>
      </div>
    </footer>
  );
}
