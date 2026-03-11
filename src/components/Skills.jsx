import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skills } from '../data/data'

// Colores de badges en rotación
const badgeColors = [
  'bg-emerald-100 text-emerald-800',
  'bg-blue-100 text-blue-800',
  'bg-teal-100 text-teal-800',
  'bg-violet-100 text-violet-800',
  'bg-green-100 text-green-800',
  'bg-cyan-100 text-cyan-800',
  'bg-amber-100 text-amber-800',
  'bg-indigo-100 text-indigo-800',
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="habilidades" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-emerald-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Competencias
          </span>
          <h2 className="section-title">Habilidades</h2>
          <p className="section-subtitle">
            Áreas de conocimiento y competencias desarrolladas a lo largo de mi formación y experiencia docente.
          </p>
        </motion.div>

        {/* Nube de badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {skills.map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.08, y: -2 }}
              className={`px-4 py-2 rounded-full text-sm font-medium cursor-default transition-shadow hover:shadow-sm ${
                badgeColors[index % badgeColors.length]
              }`}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
