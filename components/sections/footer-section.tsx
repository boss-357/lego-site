'use client'

import Image from 'next/image'
import { Heart } from 'lucide-react'

export function FooterSection() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8">
              <Image
                src="/logo.png"
                alt="LEGO Serious Play логотип"
                fill
                className="object-contain brightness-200"
              />
            </div>
            <span className="font-display font-bold text-sm">
              <span className="text-[#FF0000]">LEGO</span>{' '}
              <span className="text-[#0055BF]">Serious Play</span>{' '}
              <span className="text-gray-400">Москва</span>
            </span>
          </div>

          <nav className="flex items-center gap-6 text-sm text-gray-400">
            <a href="#methodology" className="hover:text-white transition-colors">Методология</a>
            <a href="#services" className="hover:text-white transition-colors">Услуги</a>
            <a href="#schedule" className="hover:text-white transition-colors">Расписание</a>
            <a href="#contact" className="hover:text-white transition-colors">Контакты</a>
          </nav>

          <div className="flex items-center gap-1 text-xs text-gray-500">
            <Heart className="w-3 h-3 text-[#FF0000]" />
            <span>Анжела Михеева © 2026</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
