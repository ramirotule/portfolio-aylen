import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, BookOpen, Calendar, CheckCircle } from 'lucide-react'
import { education, courses } from '../data/data'

// Orden numérico para ordenar; los "en curso" van al final
function sortKey(year) {
  const match = year.match(/\d{4}/)
  if (!match) return 9999
  return parseInt(match[0])
}

// Combinar y ordenar todos los items del timeline
const timelineItems = [
  ...education.map((e) => ({ ...e, type: 'degree' })),
  ...courses.map((c, i) => ({ ...c, id: `course-${i}`, type: 'course' })),
].sort((a, b) => {
  const yearA = a.type === 'degree' ? sortKey(a.year) : parseInt(a.year)
  const yearB = b.type === 'degree' ? sortKey(b.year) : parseInt(b.year)
  return yearA - yearB
})

function DegreeCard({ item }) {
  return (
    <div className="card hover:-translate-y-0.5 border-l-4 border-l-emerald-500">
      <div className="flex items-start gap-3 mb-3">
        <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
          <GraduationCap size={18} className="text-emerald-600" />
        </div>
        <div className="flex-1">
          <span className="inline-block text-xs font-semibold text-emerald-600 uppercase tracking-wide mb-1">
            Título
          </span>
          <h3 className="font-semibold text-gray-900 leading-snug text-base">
            {item.degree}
          </h3>
          <p className="text-emerald-700 text-sm font-medium mt-0.5">{item.institution}</p>
        </div>
      </div>
      <p className="text-gray-500 text-sm leading-relaxed mb-3">{item.description}</p>
      <div className="flex items-center gap-1.5 text-gray-400 text-xs">
        <Calendar size={12} />
        <span>{item.year}</span>
      </div>
    </div>
  )
}

function CourseCard({ item }) {
  const isApproved = item.status?.toLowerCase().includes('aprobado')

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm px-4 py-3 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
          <BookOpen size={14} className="text-blue-500" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-medium text-gray-800 text-sm leading-snug">{item.title}</p>
          <p className="text-gray-400 text-xs mt-0.5">{item.institution}</p>
          <div className="flex items-center gap-1.5 mt-2">
            <CheckCircle
              size={12}
              className={isApproved ? 'text-emerald-500' : 'text-gray-300'}
            />
            <span className={`text-xs font-medium ${isApproved ? 'text-emerald-600' : 'text-gray-400'}`}>
              {item.status}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="formacion" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-emerald-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Trayectoria
          </span>
          <h2 className="section-title">Formación &amp; Cursos</h2>
          <p className="section-subtitle">
            Un recorrido de aprendizaje continuo: títulos académicos, capacitaciones y cursos especializados.
          </p>

          {/* Leyenda */}
          <div className="inline-flex items-center gap-6 mt-2 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
              Título / Carrera
            </span>
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-blue-400 inline-block" />
              Curso / Capacitación
            </span>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Línea vertical — centrada en col de año + gap */}
          <div className="absolute left-[5.5rem] top-0 bottom-0 w-px bg-gradient-to-b from-emerald-300 via-emerald-100 to-transparent" />

          <div className="space-y-6">
            {timelineItems.map((item, index) => {
              const isDegree = item.type === 'degree'
              const dotColor = isDegree ? 'bg-emerald-500 border-white' : 'bg-blue-400 border-white'
              const dotSize = isDegree ? 'w-4 h-4' : 'w-3 h-3'

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                  className="relative flex items-start gap-0"
                >
                  {/* Año (columna izquierda, sin wrap para rangos como "2023 - 2025") */}
                  <div className="w-20 flex-shrink-0 pt-3.5 pr-3 text-right">
                    <span className={`text-xs font-bold tabular-nums whitespace-nowrap ${isDegree ? 'text-emerald-600' : 'text-blue-400'}`}>
                      {item.year}
                    </span>
                  </div>

                  {/* Punto */}
                  <div
                    className={`absolute left-[5.5rem] -translate-x-1/2 ${dotSize} ${dotColor} rounded-full border-2 shadow-sm z-10 ${
                      isDegree ? 'top-5' : 'top-4'
                    }`}
                  />

                  {/* Conector horizontal: punto → tarjeta */}
                  <div
                    className={`absolute left-[5.5rem] w-4 h-px ${isDegree ? 'bg-emerald-300' : 'bg-blue-200'} ${
                      isDegree ? 'top-[1.625rem]' : 'top-[1.375rem]'
                    }`}
                  />

                  {/* Tarjeta (columna derecha) */}
                  <div className="flex-1 pl-6 pb-2">
                    {isDegree ? <DegreeCard item={item} /> : <CourseCard item={item} />}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
