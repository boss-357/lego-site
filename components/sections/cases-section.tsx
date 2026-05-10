'use client'

import { motion } from 'framer-motion'
import { Star, Quote, TrendingUp, Users, Target, Lightbulb } from 'lucide-react'

const cases = [
  {
    company: 'IT-компания, 50+ сотрудников',
    task: 'Формирование единого видения стратегии развития',
    result: 'Команда сформировала чёткую дорожную карту на год, выявила 3 скрытых барьера роста, и каждый участник команды осознанно взял ответственность за конкретный участок проекта',
    icon: TrendingUp,
    color: '#FF0000',
  },
  {
    company: 'Производственный холдинг',
    task: 'Решение конфликтов между отделами и сплочение коллектива',
    result: 'Участники осознали корневые причины конфликтов, создали новые протоколы взаимодействия и открыли дополнительные каналы связи по смежным вопросам',
    icon: Users,
    color: '#0055BF',
  },
  {
    company: 'Стартап в сфере EdTech',
    task: 'Создание нового продукта и поиск креативных решений',
    result: 'Команда сгенерировала 12 идей, из которых 3 пошли в работу в первые 72 часа',
    icon: Lightbulb,
    color: '#00A550',
  },
]

const testimonials = [
  {
    text: 'Метод LEGO Serious Play помог нам увидеть то, что мы годами не замечали в команде. Отличный опыт для любого руководителя.',
    author: 'Алексей М.',
    role: 'CEO, IT-компания',
    rating: 5,
  },
  {
    text: 'Анжела мастерски ведёт процесс. После сессии команда стала совсем другой — более открытой, сплочённой и целеустремлённой.',
    author: 'Марина С.',
    role: 'HR-директор',
    rating: 5,
  },
  {
    text: 'Я пришёл скептиком, а ушёл с чётким планом развития бизнеса на следующий год. Метод работает!',
    author: 'Дмитрий К.',
    role: 'Основатель стартапа',
    rating: 5,
  },
]

export function CasesSection() {
  return (
    <section id="cases" className="py-20 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Кейсы и <span className="text-[#00A550]">результаты</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Примеры успешных сессий и отзывы участников.
          </p>
        </motion.div>

        {/* Cases */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {cases.map((c: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all"
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: `${c.color}15` }}>
                <c.icon className="w-5 h-5" style={{ color: c.color }} />
              </div>
              <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-1">{c.company}</p>
              <h3 className="font-display font-semibold text-base mb-2">Задача:</h3>
              <p className="text-sm text-gray-600 mb-3">{c.task}</p>
              <h3 className="font-display font-semibold text-base mb-2" style={{ color: c.color }}>Результат:</h3>
              <p className="text-sm text-gray-700">{c.result}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all relative"
            >
              <Quote className="w-8 h-8 text-[#FFD700]/40 absolute top-4 right-4" />
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating ?? 0 }).map((_: any, si: number) => (
                  <Star key={si} className="w-4 h-4 fill-[#FFD700] text-[#FFD700]" />
                ))}
              </div>
              <p className="text-sm text-gray-700 italic mb-4 leading-relaxed">«{t.text}»</p>
              <div>
                <p className="font-semibold text-sm">{t.author}</p>
                <p className="text-xs text-gray-500">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
