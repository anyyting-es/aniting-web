import React, { useState } from 'react';
import { Play, Shield, Infinity, Zap, Monitor, Globe, Smartphone, Tv, Github, Heart, Check, ExternalLink, ShieldCheck, X, HardDrive, FileDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AppShowcase from './components/AppShowcase';
import appIcon from './assets/icon.png';

const FeatureCard = ({ icon: Icon, title, desc }) => (
  <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl">
    <Icon className="text-white mb-4" size={32} />
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400">{desc}</p>
  </div>
);

const DownloadModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="bg-[#0f0f1a]/95 backdrop-blur-xl w-full max-w-md rounded-3xl border border-white/5 shadow-2xl overflow-hidden relative z-10"
        >
          <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/2">
            <h3 className="text-lg font-bold text-white tracking-wide">Descarga Iniciada</h3>
            <button onClick={onClose} className="text-gray-500 hover:text-white transition p-2 hover:bg-white/10 rounded-full">
              <X size={18} />
            </button>
          </div>
          <div className="p-6">
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              La descarga debería haber comenzado automáticamente. Si no es así, utiliza una de las siguientes opciones:
            </p>

            <div className="space-y-3">
              <a
                href="https://drive.google.com/file/d/1hwK4AIj8nGnbVSCEkqfHtSgfoKi4JruY/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="flex items-center p-4 bg-white/5 hover:bg-[#1DA462]/10 rounded-2xl border border-white/5 hover:border-[#1DA462]/20 transition-all duration-300 group"
              >
                <div className="bg-[#1DA462]/10 p-2.5 rounded-xl mr-4 text-[#1DA462] group-hover:scale-110 transition-transform">
                  <HardDrive size={22} />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-200 group-hover:text-[#1DA462] transition-colors text-sm">Google Drive</h4>
                  <p className="text-xs text-gray-600 group-hover:text-[#1DA462]/70 transition-colors">Opción Segura</p>
                </div>
                <ExternalLink size={16} className="text-gray-600 group-hover:text-[#1DA462] transition-colors" />
              </a>

              <a
                href="https://www.mediafire.com/file/jsx45xaafh3ja4i/aniting-v0.1.apk/file"
                target="_blank"
                rel="noreferrer"
                className="flex items-center p-4 bg-white/5 hover:bg-[#0070F0]/10 rounded-2xl border border-white/5 hover:border-[#0070F0]/20 transition-all duration-300 group"
              >
                <div className="bg-[#0070F0]/10 p-2.5 rounded-xl mr-4 text-[#0070F0] group-hover:scale-110 transition-transform">
                  <FileDown size={22} />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-200 group-hover:text-[#0070F0] transition-colors text-sm">MediaFire</h4>
                  <p className="text-xs text-gray-600 group-hover:text-[#0070F0]/70 transition-colors">Opción Rápida</p>
                </div>
                <ExternalLink size={16} className="text-gray-600 group-hover:text-[#0070F0] transition-colors" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default function LandingPage() {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  const handleDownload = () => {
    // Trigger direct link
    window.location.href = "https://anime-app.nyc3.cdn.digitaloceanspaces.com/aniting-v0.1.apk";
    // Open modal fallback
    setIsDownloadModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-aniting-black text-aniting-white selection:bg-white selection:text-black">
      <DownloadModal isOpen={isDownloadModalOpen} onClose={() => setIsDownloadModalOpen(false)} />

      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div
            className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img src={appIcon} alt="Logo" className="h-8 w-8 rounded-full" />
            <span className="text-2xl font-black tracking-tighter text-white">ANITING</span>
          </div>
          <div className="flex items-center space-x-6">
            <a href="https://discord.gg/3fAyERkNwn" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#5865F2] transition" title="Discord">
              <svg width="24" height="24" viewBox="0 0 127.14 96.36" className="fill-current">
                <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.11,77.11,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.89,105.89,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5.06-12.74,11.32-12.74S96,46,96,53,90.96,65.69,84.69,65.69Z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition" title="GitHub">
              <Github size={20} />
            </a>
            <a href="#" className="text-cyan-400 hover:text-cyan-300 transition flex items-center space-x-1" title="Donar">
              <Heart size={20} fill="currentColor" />
            </a>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left Column: Text Content */}
          <div className="text-left z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="inline-block mb-4"
            >
              <span className="bg-cyan-500/10 text-cyan-400 px-4 py-1 rounded-full text-xs font-bold tracking-widest border border-cyan-500/20 uppercase">
                Aniting App v0.1
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-none">
              ANIME <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">
                SIN LÍMITES
              </span>
            </h1>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-lg">
              La plataforma definitiva para streaming de anime en Android.
              HD, Dub, Sub y conexión directa con <span className="text-white font-semibold">Anilist</span>.
              Sin anuncios, sin registros molestos, solo tú y tu serie favorita.
            </p>
            <div className="flex flex-wrap gap-4">
              {/* Android Mobile - Active */}
              <button
                onClick={handleDownload}
                className="relative overflow-hidden bg-white text-black px-8 py-4 rounded-full font-bold group transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-center">
                  <Smartphone className="mr-2 group-hover:rotate-12 transition-transform duration-300" size={20} />
                  <span>Descargar para Android</span>
                </div>
              </button>

              {/* PC - Coming Soon */}
              <div className="relative group">
                <button className="bg-white/5 text-gray-500 px-6 py-4 rounded-full font-medium border border-white/5 cursor-not-allowed flex items-center opacity-60">
                  <Monitor className="mr-2" size={20} />
                  <span>PC</span>
                </button>
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/80 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10">
                  Próximamente
                </span>
              </div>

              {/* TV - Coming Soon */}
              <div className="relative group">
                <button className="bg-white/5 text-gray-500 px-6 py-4 rounded-full font-medium border border-white/5 cursor-not-allowed flex items-center opacity-60">
                  <Tv className="mr-2" size={20} />
                  <span>TV</span>
                </button>
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/80 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10">
                  Próximamente
                </span>
              </div>
            </div>

            <p className="mt-6 text-sm text-gray-500 max-w-md">
              <span className="text-cyan-400 font-bold">Nota:</span> La app está en sus primeros pasos. Si encuentras errores, por favor repórtalos en nuestro <a href="https://discord.gg/3fAyERkNwn" target="_blank" rel="noreferrer" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2 transition">Discord</a>.
            </p>
          </div>

          {/* Right Column: App Showcase */}
          <div className="flex justify-center md:justify-end relative z-10">
            {/* Glow effect behind phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[700px] bg-cyan-600/20 blur-[100px] rounded-full -z-10"></div>
            <AppShowcase />
          </div>
        </div>
      </main>

      {/* --- FEATURES GRID --- */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard
          icon={Shield} title="Sin Anuncios"
          desc="Olvídate de los pop-ups molestos. Experiencia pura de principio a fin."
        />
        <FeatureCard
          icon={Infinity}
          title="Catálogo Infinito"
          desc={
            <>
              Encuentra una gran cantidad de títulos, seguramente el que buscas está aquí. También puedes pedirlo en{' '}
              <a href="#" className="text-indigo-400 font-bold hover:text-indigo-300 transition">
                Discord
              </a>.
            </>
          }
        />
        <FeatureCard
          icon={Zap} title="Sincronización Anilist"
          desc="Tu progreso se guarda automáticamente. Cambia de dispositivo sin perder el hilo."
        />
      </section>

      {/* --- VIRUSTOTAL SECURITY SECTION --- */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4 flex justify-center items-center gap-2">
            <ShieldCheck className="text-green-500" size={32} /> Seguridad Garantizada
          </h2>
          <p className="text-gray-400">
            Tu seguridad es nuestra prioridad. Nuestra APK es analizada constantemente para garantizar que esté libre de amenazas.
          </p>
        </div>

        {/* VirusTotal Mockup Card */}
        <div className="bg-[#1b1b2f] rounded-xl overflow-hidden border border-white/10 shadow-2xl font-mono text-sm">
          {/* Header / Summary */}
          <div className="p-6 border-b border-white/10 flex flex-col md:flex-row items-center gap-8">
            {/* Score Circle */}
            <div className="relative w-24 h-24 flex-shrink-0">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                <path className="text-gray-700" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="2.5" />
                <path className="text-green-500" strokeDasharray="100, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="2.5" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-green-500">
                <span className="text-2xl font-bold leading-none">0</span>
                <span className="text-xs text-gray-500">/ 66</span>
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left">
              <div className="text-green-400 font-bold mb-2 flex items-center justify-center md:justify-start gap-2">
                <Check size={16} strokeWidth={3} /> No security vendors flagged this file as malicious
              </div>
              <div className="bg-black/30 p-3 rounded text-gray-400 text-xs break-all">
                58101235ff3f9748cd1e7387b67056f93448b0e109c1c73f922bdc22d425ae32
                <div className="text-white font-bold mt-1 text-base">aniting-v0.1.apk</div>
              </div>
            </div>

            {/* Link */}
            <a
              href="https://www.virustotal.com/gui/file/58101235ff3f9748cd1e7387b67056f93448b0e109c1c73f922bdc22d425ae32/detection"
              target="_blank"
              rel="noreferrer"
              className="bg-[#2d2d45] hover:bg-[#3d3d5c] text-[#aeb6ff] px-4 py-2 rounded flex items-center gap-2 transition text-xs font-bold"
            >
              <ExternalLink size={14} /> Ver Análisis
            </a>
          </div>

          {/* Vendor Grid (Mockup) */}
          <div className="p-6 bg-[#141422] grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-gray-400">
            {['Acronis', 'Alibaba', 'Avast', 'AVG', 'BitDefender', 'Google', 'Kaspersky', 'Microsoft'].map(vendor => (
              <div key={vendor} className="flex justify-between items-center border-b border-white/5 pb-2">
                <span>{vendor}</span>
                <div className="flex items-center text-green-500 gap-1">
                  <Check size={12} /> <span className="hidden sm:inline">Undetected</span>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-[#208b56] p-2 text-center text-xs font-bold text-white tracking-wider">
            COMMUNITY SCORE: CLEAN
          </div>
        </div>
      </section>

      {/* --- FOOTER / SUPPORT --- */}
      <footer className="border-t border-white/5 pt-12 pb-6 bg-black/40">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={appIcon} alt="Aniting" className="h-8 w-8 rounded-full" />
              <span className="text-xl font-black tracking-tighter text-white">ANITING</span>
            </div>
            <p className="text-gray-500 text-sm max-w-sm mb-4">
              El proyecto perfecto para los amantes del anime. Sin interrupciones, máxima calidad.
            </p>
            <div className="text-xs text-gray-600 max-w-sm border-t border-white/5 pt-4">
              <p className="font-bold mb-1">Renuncia de Responsabilidad:</p>
              <p>
                Aniting no almacena ni distribuye ningún archivo de video en sus servidores.
                La aplicación funciona exclusivamente como un índice de contenido disponible públicamente en internet.
                No utilizamos reproductores propios ni alojamos material con derechos de autor.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <h3 className="font-bold text-white">Soporte & Comunidad</h3>
            <p className="text-gray-400 text-sm">
              ¿Tienes preguntas, dudas o recomendaciones? Únete a nuestro servidor de Discord para estar al tanto de las novedades y reportar errores.
            </p>
            <a
              href="https://discord.gg/3fAyERkNwn"
              target="_blank"
              rel="noreferrer"
              className="bg-[#5865F2] hover:bg-[#4752C4] text-white px-6 py-3 rounded-lg font-bold inline-flex items-center gap-2 w-fit transition shadow-lg hover:translate-x-1"
            >
              {/* Discord Icon SVG */}
              <svg width="24" height="24" viewBox="0 0 127.14 96.36" className="fill-current">
                <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.11,77.11,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.89,105.89,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5.06-12.74,11.32-12.74S96,46,96,53,90.96,65.69,84.69,65.69Z" />
              </svg>
              Unirse al Discord
            </a>
          </div>
        </div>
        <div className="pt-8 text-center text-gray-700 text-xs tracking-widest uppercase border-t border-white/5 mx-6">
          PROYECTO ANITING // HECHO POR UN ESTUDIANTE CON MUCHO TIEMPO LIBRE
        </div>
      </footer>
    </div>
  );
}