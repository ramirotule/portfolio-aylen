import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { BookOpen, Heart, Leaf } from 'lucide-react'
import { personalInfo } from '../data/data'

const highlights = [
  { icon: Leaf, label: 'Ciencias Ambientales', color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { icon: BookOpen, label: 'Docencia Secundaria', color: 'text-blue-600', bg: 'bg-blue-50' },
  { icon: Heart, label: 'Educación Inclusiva', color: 'text-rose-500', bg: 'bg-rose-50' },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="sobre-mi" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Ilustración / Avatar lado izquierdo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-3xl shadow-2xl shadow-emerald-200 overflow-hidden ring-4 ring-emerald-100">
                <img
                  src="/profile.png"
                  alt="Dévora Aylén De Ferrari"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Tarjeta flotante */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-lg p-4 border border-gray-100">
                <p className="text-2xl font-bold text-emerald-600">5+</p>
                <p className="text-xs text-gray-500 font-medium">Años de experiencia<br />docente</p>
              </div>
            </div>
          </motion.div>

          {/* Texto lado derecho */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="inline-block text-emerald-600 font-semibold text-sm uppercase tracking-wider mb-3">
              Sobre mí
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Ciencia, naturaleza y<br />
              <span className="text-emerald-600">pasión por enseñar</span>
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
              <p>{personalInfo.bio}</p>
              <p>{personalInfo.bioExtra}</p>
            </div>

            {/* Highlights */}
            <div className="flex flex-wrap gap-3">
              {highlights.map(({ icon: Icon, label, color, bg }) => (
                <div
                  key={label}
                  className={`flex items-center gap-2 px-4 py-2 ${bg} rounded-full`}
                >
                  <Icon size={16} className={color} />
                  <span className={`text-sm font-medium ${color}`}>{label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
