'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, Play, Users, Target, Lightbulb } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 pb-12 hero-gradient overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#FFD700]/20 text-[#0055BF] text-sm font-medium">
                <Play className="w-3.5 h-3.5 mr-1.5" />
                Официальная методика LEGO®
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
              <span className="text-[#FF0000]">LEGO</span>{' '}
              <span className="text-[#0055BF]">Serious Play:</span>
              <br />
              <span className="text-gray-800">мыслить руками, решать смело</span>
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
              Мощный инструмент для стратегического планирования, командообразования и решения сложных бизнес-задач. Открытые, индивидуальные и групповые сессии в Москве.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#FF0000] text-white rounded-lg font-semibold text-base hover:bg-red-700 transition-all shadow-lg shadow-red-200 hover:shadow-xl hover:shadow-red-300"
              >
                Записаться на сессию
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#methodology"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white border-2 border-[#0055BF] text-[#0055BF] rounded-lg font-semibold text-base hover:bg-[#0055BF] hover:text-white transition-all"
              >
                Узнать о методе
              </a>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-[#0055BF]" />
                <span>5–100 участников</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-[#FF0000]" />
                <span>Оффлайн формат</span>
              </div>
              <div className="flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-[#FFD700]" />
                <span>4–8 часов</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://cdn.prod.website-files.com/5fb7cc73423d5a4cc10432a7/671768be9c0fd932a5ca1426_Lego-Serious-Play-Inhouse-Workshop-3.jpg"
                alt="Бизнес-команда на сессии LEGO Serious Play строит стратегические модели"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-[#FFD700] rounded-xl -z-10 opacity-60" />
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#FF0000] rounded-xl -z-10 opacity-40" />
            <div className="absolute top-1/2 -right-6 w-12 h-12 bg-[#00A550] rounded-lg -z-10 opacity-50" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
