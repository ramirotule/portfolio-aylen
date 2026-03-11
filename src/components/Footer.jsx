import { Leaf } from 'lucide-react'
import { personalInfo } from '../data/data'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo y nombre */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-emerald-600 rounded-lg flex items-center justify-center">
            <Leaf size={14} className="text-white" />
          </div>
          <div>
            <p className="text-white font-semibold text-sm">{personalInfo.name}</p>
            <p className="text-gray-500 text-xs">{personalInfo.titles[0]}</p>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-xs text-center">
          © {year} {personalInfo.name} — Todos los derechos reservados.
        </p>

        {/* Links de sección */}
        <div className="flex items-center gap-4">
          <a href="#sobre-mi" className="text-gray-500 hover:text-emerald-400 text-xs transition-colors">Sobre mí</a>
          <a href="#areas" className="text-gray-500 hover:text-emerald-400 text-xs transition-colors">Áreas</a>
          <a href="#contacto" className="text-gray-500 hover:text-emerald-400 text-xs transition-colors">Contacto</a>
        </div>
      </div>
    </footer>
  )
}
