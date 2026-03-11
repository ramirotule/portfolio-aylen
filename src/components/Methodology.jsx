import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Puzzle, FlaskConical, Brain, TreePine, Leaf, Users } from 'lucide-react'
import { methodology } from '../data/data'

const iconMap = { Puzzle, FlaskConical, Brain, TreePine, Leaf, Users }

const gradients = [
  'from-emerald-500 to-teal-500',
  'from-blue-500 to-cyan-500',
  'from-violet-500 to-purple-500',
  'from-green-500 to-emerald-500',
  'from-amber-500 to-orange-500',
  'from-rose-500 to-pink-500',
]

export default function Methodology() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="metodologia" className="py-24 bg-white">
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
            Pedagogía
          </span>
          <h2 className="section-title">Metodología de Enseñanza</h2>
          <p className="section-subtitle">
            Un enfoque centrado en el estudiante, la curiosidad científica y el aprendizaje con sentido.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {methodology.map((item, index) => {
            const Icon = iconMap[item.icon]
            const gradient = gradients[index % gradients.length]

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group card hover:-translate-y-1"
              >
                {/* Icono con gradiente */}
                <div className={`w-12 h-12 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  {Icon && <Icon size={22} className="text-white" />}
                </div>

                <h3 className="font-semibold text-gray-900 text-lg mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>

                {/* Barra decorativa */}
                <div className={`mt-5 h-0.5 w-10 bg-gradient-to-r ${gradient} rounded-full group-hover:w-20 transition-all duration-500`} />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
