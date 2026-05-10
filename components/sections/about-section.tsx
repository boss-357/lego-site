'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'

type Facilitator = {
  name: string
  role: string
  image: string
  facts: string[]
}

const facilitators: Facilitator[] = [
  {
    name: 'Анжела Михеева',
    role: 'Фасилитатор LEGO® Serious Play®',
    image: '/facilitators/angela.jpg',
    facts: [
      'Предприниматель — 8 лет',
      'Арт-коуч',
      'Создатель игры «Сила»',
      'Создатель пространства «Портал»',
    ],
  },
  {
    name: 'Максимов Вячеслав',
    role: 'Фасилитатор LEGO® Serious Play®',
    image: '/facilitators/vyacheslav.jpg',
    facts: [
      'Предприниматель — 15 лет',
      'Арт-коуч',
      '7 твердых бизнесов — личный опыт',
      'Продактменеджер',
    ],
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Наши <span className="text-[#0055BF]">фасилитаторы</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {facilitators.map((facilitator, facilitatorIndex) => (
            <motion.div
              key={facilitator.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: facilitatorIndex * 0.08 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all"
            >
              <div className="flex flex-col sm:flex-row gap-5">
                <div className="relative w-full sm:w-44 aspect-[3/4] rounded-xl overflow-hidden bg-gray-100 shrink-0">
                  <Image
                    src={facilitator.image}
                    alt={facilitator.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 176px"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="font-display text-2xl font-bold mb-1">{facilitator.name}</h3>
                  <p className="text-gray-600 mb-4">{facilitator.role}</p>

                  <ul className="space-y-2.5">
                    {facilitator.facts.map((fact) => (
                      <li key={fact} className="flex items-start gap-2.5 text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-[#00A550]" />
                        <span>{fact}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
