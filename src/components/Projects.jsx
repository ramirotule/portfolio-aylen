import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Leaf, ChefHat, Map, FlaskConical, Star } from 'lucide-react'
import { projects } from '../data/data'

const iconMap = { Leaf, ChefHat, Map, FlaskConical, Star }

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="proyectos" className="py-24 bg-gray-50">
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
            Experiencia
          </span>
          <h2 className="section-title">Proyectos y Actividades</h2>
          <p className="section-subtitle">
            Iniciativas educativas que conectan el aula con la realidad y la comunidad.
          </p>
        </motion.div>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = iconMap[project.icon]

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group card hover:-translate-y-1 flex flex-col"
              >
                {/* Header de la tarjeta */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    {Icon && <Icon size={22} className="text-white" />}
                  </div>
                  <h3 className="font-semibold text-gray-900 text-base leading-snug pt-1">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-gray-100">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="badge bg-emerald-50 text-emerald-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
