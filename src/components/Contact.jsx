import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Linkedin, MapPin, Send } from 'lucide-react'
import { personalInfo } from '../data/data'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contacto" className="py-24 bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 relative overflow-hidden">
      {/* Patrón de fondo */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)`,
          backgroundSize: '28px 28px',
        }}
      />

      {/* Orbes decorativos */}
      <div className="absolute top-0 left-1/3 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-emerald-400 font-semibold text-sm uppercase tracking-wider mb-3">
            Conectemos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Hablamos?</h2>
          <p className="text-gray-300 text-lg max-w-xl mx-auto leading-relaxed">
            Estoy disponible para colaboraciones educativas, proyectos ambientales o simplemente para intercambiar ideas sobre ciencia y educación.
          </p>
        </motion.div>
[diff_block_end]
[diff_block_start]
        {/* Tarjetas de contacto */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col md:flex-row md:flex-nowrap justify-center items-stretch gap-4 mb-10"
        >
          {/* Email */}
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-4 p-5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-400/40 rounded-2xl transition-all duration-200 group flex-1 min-w-fit"
          >
            <div className="w-11 h-11 bg-emerald-500/20 rounded-xl flex items-center justify-center group-hover:bg-emerald-500/30 transition-colors">
              <Mail size={20} className="text-emerald-400" />
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-0.5">Email</p>
              <p className="text-white text-sm font-medium whitespace-nowrap">{personalInfo.email}</p>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-400/40 rounded-2xl transition-all duration-200 group flex-1 min-w-fit"
          >
            <div className="w-11 h-11 bg-blue-500/20 rounded-xl flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
              <Linkedin size={20} className="text-blue-400" />
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-0.5">LinkedIn</p>
              <p className="text-white text-sm font-medium whitespace-nowrap">{personalInfo.linkedin.replace('https://', '')}</p>
            </div>
          </a>

          {/* Ubicación */}
          <div className="flex items-center gap-4 p-5 bg-white/5 border border-white/10 rounded-2xl flex-1 min-w-fit">
            <div className="w-11 h-11 bg-teal-500/20 rounded-xl flex items-center justify-center">
              <MapPin size={20} className="text-teal-400" />
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-0.5">Ubicación</p>
              <p className="text-white text-sm font-medium whitespace-nowrap">{personalInfo.location}</p>
            </div>
          </div>
        </motion.div>

        {/* CTA principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-white rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5"
          >
            <Send size={20} />
            Enviar un mensaje
          </a>
        </motion.div>
      </div>
    </section>
  )
}
