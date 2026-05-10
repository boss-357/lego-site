'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '#methodology', label: 'Методология' },
  { href: '#services', label: 'Услуги' },
  { href: '#cases', label: 'Кейсы' },
  { href: '#schedule', label: 'Расписание' },
  { href: '#about', label: 'О фасилитаторах' },
  { href: '#contact', label: 'Контакты' },
]

export function HeaderSection() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex items-center justify-between h-16 sm:h-18">
        <a href="#" className="flex items-center gap-2 shrink-0">
          <div className="relative w-10 h-10">
            <Image
              src="/logo.png"
              alt="LEGO Serious Play логотип"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="font-display font-bold text-lg tracking-tight hidden sm:block">
            <span className="text-[#FF0000]">LEGO</span>{' '}
            <span className="text-[#0055BF]">Serious Play</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link: { href: string; label: string }) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#FF0000] transition-colors rounded-md hover:bg-red-50"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+79932824681"
            className="hidden sm:flex items-center gap-2 px-4 py-2 bg-[#FF0000] text-white rounded-lg font-medium text-sm hover:bg-red-700 transition-colors shadow-sm"
          >
            <Phone className="w-4 h-4" />
            Записаться
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            aria-label="Меню"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/98 backdrop-blur-md border-t overflow-hidden"
          >
            <nav className="max-w-[1200px] mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link: { href: string; label: string }) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-base font-medium text-gray-700 hover:text-[#FF0000] hover:bg-red-50 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+79932824681"
                className="mt-2 flex items-center justify-center gap-2 px-4 py-3 bg-[#FF0000] text-white rounded-lg font-medium hover:bg-red-700 transition-colors"
              >
                <Phone className="w-4 h-4" />
                +7 (993) 282-46-81
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
