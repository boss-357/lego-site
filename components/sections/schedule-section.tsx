'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin, Users, ArrowRight } from 'lucide-react'
import { scheduleEvents } from '@/lib/config/schedule-events'

export function ScheduleSection() {
  return (
    <section id="schedule" className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Ближайшие <span className="text-[#FF0000]">встречи</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Запишитесь на открытую сессию и попробуйте метод на практике.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {scheduleEvents.map((event, i) => (
            <motion.div
              key={`${event.date}-${event.title}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all border border-gray-100 overflow-hidden"
            >
              <div className="p-1.5" style={{ backgroundColor: event.color }}>
                <div className="text-center text-white text-xs font-semibold">{event.day}</div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-5 h-5" style={{ color: event.color }} />
                  <span className="font-display font-bold text-lg">{event.date}</span>
                </div>
                <h3 className="font-display font-semibold text-base mb-4">{event.title}</h3>
                <div className="space-y-2 text-sm text-gray-600 mb-5">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-400" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    {event.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-gray-400" />
                    {event.seats} мест
                  </div>
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 w-full justify-center px-4 py-2.5 rounded-lg font-medium text-white text-sm transition-all hover:opacity-90"
                  style={{ backgroundColor: event.color }}
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
