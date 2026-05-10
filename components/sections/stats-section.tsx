'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'
import { Building2, Globe, Award, TrendingUp } from 'lucide-react'

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 2000
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target])

  return <span ref={ref}>{count}{suffix}</span>
}

const stats = [
  { icon: Building2, value: 500, suffix: '+', label: 'Компаний в России используют метод', color: '#FF0000' },
  { icon: Globe, value: 70, suffix: '+', label: 'Стран мира практикуют LSP', color: '#0055BF' },
  { icon: Award, value: 100, suffix: '%', label: 'Участников вовлечены в процесс', color: '#00A550' },
  { icon: TrendingUp, value: 8, suffix: ' лет', label: 'Опыт фасилитатора в бизнесе', color: '#B8960F' },
]

export function StatsSection() {
  return (
    <section className="py-12 bg-white border-y">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-2" style={{ color: stat.color }} />
              <div className="font-display text-3xl sm:text-4xl font-bold tracking-tight" style={{ color: stat.color }}>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
