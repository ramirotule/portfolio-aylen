import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Leaf, Download } from 'lucide-react'

const navLinks = [
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#formacion', label: 'Formación' },
  { href: '#areas', label: 'Áreas' },
  { href: '#metodologia', label: 'Metodología' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center group-hover:bg-emerald-700 transition-colors">
              <Leaf size={16} className="text-white" />
            </div>
            <span className={`font-semibold text-sm transition-colors ${scrolled ? 'text-gray-900' : 'text-white'}`}>
              Dévora Aylén De Ferrari
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-emerald-50 hover:text-emerald-700 ${
                  scrolled ? 'text-gray-600' : 'text-white/90 hover:text-emerald-600'
                }`}
              >
                {link.label}
              </a>
            ))}

            {/* Botón descarga CV */}
            <a
              href="/Aylen-De-Ferrari-CV.pdf"
              download
              className={`ml-2 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 border ${
                scrolled
                  ? 'border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-white'
                  : 'border-white/50 text-white hover:bg-white hover:text-emerald-700'
              }`}
            >
              <Download size={14} />
              CV
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-gray-600 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-lg"
          >
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2.5 text-sm font-medium text-gray-700 rounded-lg hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/Curriculum Vitae -  De Ferrari, Dévora Aylén.pdf"
                download
                className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-emerald-700 rounded-lg hover:bg-emerald-50 transition-colors border border-emerald-200 mt-2"
              >
                <Download size={14} />
                Descargar CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
