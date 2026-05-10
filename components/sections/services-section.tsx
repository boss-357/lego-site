'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Users, User, Building, Clock, MapPin, CheckCircle, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Users,
    title: 'Открытые сессии',
    subtitle: 'Для предпринимателей и руководителей',
    image: 'https://cdn.abacus.ai/images/1b4c866d-cde6-4624-8287-c8c987d8d6f4.png',
    color: '#FF0000',
    features: [
      'Смешанная группа из разных сфер',
      'Регулярные встречи по расписанию',
      'Новые контакты и инсайты',
      'Идеально для знакомства с методом',
    ],
    details: '2,5 часа • Москва • мини-группа',
  },
  {
    icon: User,
    title: 'Индивидуальные сессии',
    subtitle: 'Персональный коучинг с LEGO',
    image: 'https://cdn.abacus.ai/images/c7896d19-d589-49a8-ab6f-dd0fe3a035af.png',
    color: '#0055BF',
    features: [
      'Личные бизнес-вызовы и цели',
      'Глубокая проработка стратегии',
      'Индивидуальный сценарий сессии',
      'Коуч-сессия для руководителя',
    ],
    details: '2–4 часа • Москва / МО',
  },
  {
    icon: Building,
    title: 'Групповые сессии',
    subtitle: 'Для команд и корпоративных клиентов',
    image: 'https://cdn.abacus.ai/images/396c531a-847f-4465-b11e-aa0886a441c4.png',
    color: '#00A550',
    features: [
      'Командообразование и сплочение',
      'Стратегические сессии для компаний',
      'От 5 до 100 участников',
      'Выезд на территорию заказчика',
    ],
    details: '4–8 часов • Москва / МО • выезд',
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Форматы <span className="text-[#0055BF]">сессий</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Выберите подходящий формат: от открытых встреч до корпоративных стратегических сессий.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all group overflow-hidden border border-gray-100"
            >
              <div className="relative aspect-[4/3] bg-gray-100">
                <Image
                  src={s.image}
                  alt={`${s.title} LEGO Serious Play в Москве`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-3 left-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center backdrop-blur-sm"
                    style={{ backgroundColor: `${s.color}E6` }}
                  >
                    <s.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display font-bold text-xl mb-1" style={{ color: s.color }}>{s.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{s.subtitle}</p>

                <ul className="space-y-2 mb-5">
                  {(s.features ?? []).map((f: string, fi: number) => (
                    <li key={fi} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" style={{ color: s.color }} />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
                  <div className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{s.details}</div>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 w-full justify-center px-4 py-2.5 rounded-lg font-medium text-white text-sm transition-all hover:opacity-90"
                  style={{ backgroundColor: s.color }}
                >
                  Записаться
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
