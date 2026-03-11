import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import {
  Calculator, Leaf, FlaskConical, Cpu, Dna, Shield,
  TreePine, Search, Atom, BookOpen, Globe, Wind, X,
} from 'lucide-react'
import { teachingAreas } from '../data/data'

// Mapa de iconos por nombre
const iconMap = {
  Calculator, Leaf, FlaskConical, Cpu, Dna, Shield,
  TreePine, Search, Atom, BookOpen, Globe, Wind,
}

// Mapa de colores por nombre de color
const colorMap = {
  emerald: { card: 'bg-emerald-50 hover:bg-emerald-100 border-emerald-100', icon: 'bg-emerald-100 text-emerald-600', badge: 'bg-emerald-100 text-emerald-700' },
  green:   { card: 'bg-green-50 hover:bg-green-100 border-green-100',       icon: 'bg-green-100 text-green-600',   badge: 'bg-green-100 text-green-700' },
  blue:    { card: 'bg-blue-50 hover:bg-blue-100 border-blue-100',          icon: 'bg-blue-100 text-blue-600',     badge: 'bg-blue-100 text-blue-700' },
  purple:  { card: 'bg-purple-50 hover:bg-purple-100 border-purple-100',    icon: 'bg-purple-100 text-purple-600', badge: 'bg-purple-100 text-purple-700' },
  teal:    { card: 'bg-teal-50 hover:bg-teal-100 border-teal-100',          icon: 'bg-teal-100 text-teal-600',     badge: 'bg-teal-100 text-teal-700' },
  orange:  { card: 'bg-orange-50 hover:bg-orange-100 border-orange-100',    icon: 'bg-orange-100 text-orange-600', badge: 'bg-orange-100 text-orange-700' },
  lime:    { card: 'bg-lime-50 hover:bg-lime-100 border-lime-100',          icon: 'bg-lime-100 text-lime-600',     badge: 'bg-lime-100 text-lime-700' },
  indigo:  { card: 'bg-indigo-50 hover:bg-indigo-100 border-indigo-100',    icon: 'bg-indigo-100 text-indigo-600', badge: 'bg-indigo-100 text-indigo-700' },
  amber:   { card: 'bg-amber-50 hover:bg-amber-100 border-amber-100',       icon: 'bg-amber-100 text-amber-600',   badge: 'bg-amber-100 text-amber-700' },
  cyan:    { card: 'bg-cyan-50 hover:bg-cyan-100 border-cyan-100',          icon: 'bg-cyan-100 text-cyan-600',     badge: 'bg-cyan-100 text-cyan-700' },
}

function AreaModal({ area, onClose }) {
  const Icon = iconMap[area.icon]
  const colors = colorMap[area.color] || colorMap.emerald

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: 'spring', damping: 25 }}
        className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X size={20} />
        </button>

        <div className={`w-14 h-14 ${colors.icon} rounded-2xl flex items-center justify-center mb-5`}>
          {Icon && <Icon size={26} />}
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-2">{area.subject}</h3>
        <p className="text-gray-500 mb-6 leading-relaxed">{area.content.overview}</p>

        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-3">
            Contenidos principales
          </h4>
          <ul className="space-y-2">
            {area.content.topics.map((topic) => (
              <li key={topic} className="flex items-center gap-2 text-gray-600 text-sm">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0" />
                {topic}
              </li>
            ))}
          </ul>
        </div>

        <div className={`rounded-xl p-4 ${colors.card} border`}>
          <p className="text-sm font-medium text-gray-700 mb-1">Enfoque pedagógico</p>
          <p className="text-sm text-gray-600">{area.content.approach}</p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function TeachingAreas() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [selected, setSelected] = useState(null)

  return (
    <section id="areas" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-emerald-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Habilitación docente
          </span>
          <h2 className="section-title">Áreas de Enseñanza</h2>
          <p className="section-subtitle">
            Hacé clic en cada materia para conocer los contenidos y el enfoque pedagógico.
          </p>
        </motion.div>

        {/* Grid de tarjetas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {teachingAreas.map((area, index) => {
            const Icon = iconMap[area.icon]
            const colors = colorMap[area.color] || colorMap.emerald

            return (
              <motion.button
                key={area.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                onClick={() => setSelected(area)}
                className={`text-left p-5 rounded-2xl border cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-md ${colors.card}`}
              >
                <div className={`w-11 h-11 ${colors.icon} rounded-xl flex items-center justify-center mb-4`}>
                  {Icon && <Icon size={20} />}
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-2 leading-snug">
                  {area.subject}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">
                  {area.description}
                </p>
                <span className="inline-block mt-3 text-xs font-medium text-emerald-600 hover:underline">
                  Ver contenido →
                </span>
              </motion.button>
            )
          })}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <AreaModal area={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}
