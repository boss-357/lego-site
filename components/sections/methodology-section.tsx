'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Brain, Handshake, Eye, Puzzle, Zap, Layers, ArrowRight } from 'lucide-react'

const principles = [
  {
    icon: Brain,
    title: 'Мышление руками',
    desc: 'Строя модели, участники подключают подсознание и находят решения за гранью логики',
    color: '#FF0000',
  },
  {
    icon: Handshake,
    title: 'Бесконфликтный диалог',
    desc: 'Игровой формат помогает найти компромиссы для противоположных точек зрения',
    color: '#0055BF',
  },
  {
    icon: Eye,
    title: 'Вскрытие скрытого',
    desc: 'Модели показывают факторы, которые тормозят компанию, но замалчиваются',
    color: '#00A550',
  },
  {
    icon: Zap,
    title: 'Креативное мышление',
    desc: 'Активация творческого мышления в симбиозе с логикой — быстрые решения',
    color: '#FFD700',
  },
  {
    icon: Puzzle,
    title: 'Системное видение',
    desc: 'От стратегических целей до конкретных действий — видеть систему целиком',
    color: '#FF0000',
  },
  {
    icon: Layers,
    title: 'Вовлечённость 100%',
    desc: 'Все строят, все рассказывают, все вовлечены — никто не остаётся в стороне',
    color: '#0055BF',
  },
]

const steps = [
  { num: '01', title: 'Старт сессии', desc: 'Группы по 5–6 человек, индивидуальные наборы LEGO®, разминка' },
  { num: '02', title: 'Индивидуальное моделирование', desc: 'Каждый строит модель своего видения и презентует группе' },
  { num: '03', title: 'Командное моделирование', desc: 'Общая модель стратегии, обсуждение, поиск ключевых решений' },
  { num: '04', title: 'Интеграция', desc: 'Инсайты, первые шаги на 72 часа, план внедрения изменений' },
]

export function MethodologySection() {
  return (
    <section id="methodology" className="py-20 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            О методологии <span className="text-[#FF0000]">LEGO</span>{' '}
            <span className="text-[#0055BF]">Serious Play</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Официальная разработка компании LEGO и профессоров Йохана Руса и Барта Виктора.
            Метод активно используют Google, NASA, Microsoft, Сбер, ВТБ и другие лидеры рынка.
          </p>
        </motion.div>

        {/* Principles Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {principles.map((p: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all group cursor-default"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-transform group-hover:scale-110"
                style={{ backgroundColor: `${p.color}15` }}
              >
                <p.icon className="w-5 h-5" style={{ color: p.color }} />
              </div>
              <h3 className="font-display font-semibold text-lg mb-1.5">{p.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* How it works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="font-display text-2xl font-bold tracking-tight text-center mb-10">
            Как проходит сессия
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all"
              >
                <span className="font-mono text-4xl font-bold text-gray-100">{s.num}</span>
                <h4 className="font-display font-semibold text-base mt-2 mb-2">{s.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                {i < 3 && (
                  <ArrowRight className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Image row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 grid md:grid-cols-2 gap-6"
        >
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-md bg-gray-200">
            <Image
              src="https://cdn.abacus.ai/images/9bb5a8c9-40ab-4902-b793-9ca3f12f4a03.png"
              alt="Командная работа с LEGO в бизнес-среде для стратегического планирования"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-md bg-gray-200">
            <Image
              src="https://cdn.abacus.ai/images/a2af2cbe-112f-4b0f-ac52-d92490a87bdf.png"
              alt="Руки участников собирают модель из LEGO на деловой встрече"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
