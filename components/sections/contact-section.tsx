'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Phone, Mail, MessageCircle, MapPin, User, AtSign, MessageSquare, CheckCircle2 } from 'lucide-react'
import { toast } from 'sonner'

const formats = [
  { value: 'открытая', label: 'Открытая сессия' },
  { value: 'индивидуальная', label: 'Индивидуальная сессия' },
  { value: 'групповая', label: 'Групповая сессия' },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    format: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e?.preventDefault?.()
    if (!formData?.name || !formData?.contact) {
      toast.error('Пожалуйста, укажите имя и контакт')
      return
    }
    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await res?.json?.() ?? {}
      if (data?.success) {
        setSent(true)
        toast.success('Заявка успешно отправлена!')
        setFormData({ name: '', contact: '', format: '', message: '' })
      } else {
        toast.error(data?.message ?? 'Ошибка при отправке')
      }
    } catch {
      toast.error('Ошибка соединения. Попробуйте позже.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Записаться на <span className="text-[#FF0000]">сессию</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Оставьте заявку и мы свяжемся с вами для обсуждения деталей.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {sent ? (
              <div className="bg-green-50 rounded-2xl p-10 text-center">
                <CheckCircle2 className="w-16 h-16 text-[#00A550] mx-auto mb-4" />
                <h3 className="font-display text-2xl font-bold mb-2">Спасибо!</h3>
                <p className="text-gray-600 mb-4">Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.</p>
                <button
                  onClick={() => setSent(false)}
                  className="px-6 py-2 bg-[#0055BF] text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Отправить ещё
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Ваше имя *"
                    value={formData.name}
                    onChange={(e: any) => setFormData({ ...(formData ?? {}), name: e?.target?.value ?? '' })}
                    className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF0000]/30 focus:border-[#FF0000] transition-all text-sm"
                    required
                  />
                </div>

                <div className="relative">
                  <AtSign className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Телефон или Email *"
                    value={formData.contact}
                    onChange={(e: any) => setFormData({ ...(formData ?? {}), contact: e?.target?.value ?? '' })}
                    className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF0000]/30 focus:border-[#FF0000] transition-all text-sm"
                    required
                  />
                </div>

                <div className="relative">
                  <select
                    value={formData.format}
                    onChange={(e: any) => setFormData({ ...(formData ?? {}), format: e?.target?.value ?? '' })}
                    className="w-full pl-4 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF0000]/30 focus:border-[#FF0000] transition-all text-sm appearance-none bg-white text-gray-700"
                  >
                    <option value="">Выберите формат сессии</option>
                    {formats.map((f: any) => (
                      <option key={f.value} value={f.value}>{f.label}</option>
                    ))}
                  </select>
                </div>

                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                  <textarea
                    placeholder="Сообщение (необязательно)"
                    rows={4}
                    value={formData.message}
                    onChange={(e: any) => setFormData({ ...(formData ?? {}), message: e?.target?.value ?? '' })}
                    className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF0000]/30 focus:border-[#FF0000] transition-all text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-[#FF0000] text-white rounded-lg font-semibold hover:bg-red-700 transition-all shadow-lg shadow-red-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span>Отправка...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Отправить заявку
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-400 text-center">
                  Нажимая кнопку, вы соглашаетесь на обработку персональных данных
                </p>
              </form>
            )}
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-display font-bold text-lg mb-4">Контакты</h3>
              <div className="space-y-4">
                <a href="tel:+79932824681" className="flex items-center gap-3 text-gray-700 hover:text-[#FF0000] transition-colors group">
                  <div className="w-10 h-10 rounded-lg bg-[#FF0000]/10 flex items-center justify-center group-hover:bg-[#FF0000]/20 transition-colors">
                    <Phone className="w-5 h-5 text-[#FF0000]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Телефон</p>
                    <p className="font-medium">+7 (993) 282-46-81</p>
                  </div>
                </a>

                <a href="mailto:anzhelamikheeva@gmail.com" className="flex items-center gap-3 text-gray-700 hover:text-[#0055BF] transition-colors group">
                  <div className="w-10 h-10 rounded-lg bg-[#0055BF]/10 flex items-center justify-center group-hover:bg-[#0055BF]/20 transition-colors">
                    <Mail className="w-5 h-5 text-[#0055BF]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Email</p>
                    <p className="font-medium">anzhelamikheeva@gmail.com</p>
                  </div>
                </a>

                <a href="https://t.me/Anzh_mikheeva" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-700 hover:text-[#0055BF] transition-colors group">
                  <div className="w-10 h-10 rounded-lg bg-[#0055BF]/10 flex items-center justify-center group-hover:bg-[#0055BF]/20 transition-colors">
                    <MessageCircle className="w-5 h-5 text-[#0055BF]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Telegram</p>
                    <p className="font-medium">@Anzh_mikheeva</p>
                  </div>
                </a>

                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-10 h-10 rounded-lg bg-[#00A550]/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#00A550]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Локация</p>
                    <p className="font-medium">Москва, Московская область</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#FFD700]/10 rounded-xl p-6">
              <h3 className="font-display font-bold text-lg mb-2">Быстрая связь</h3>
              <p className="text-sm text-gray-600 mb-4">
                Напишите в Telegram или VK для быстрого ответа.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://t.me/Anzh_mikheeva"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-[#0055BF] text-white rounded-lg font-medium text-sm hover:bg-blue-700 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Telegram
                </a>
                <a
                  href="https://m.vk.com/anzhela_mikheeva"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-[#0055BF] text-white rounded-lg font-medium text-sm hover:bg-blue-700 transition-colors"
                >
                  VK
                </a>
              </div>
            </div>

            <div className="bg-[#FF0000]/5 rounded-xl p-6">
              <p className="text-sm text-gray-600">
                📩 Заявки обрабатываются в течение 24 часов.
                Запись на бесплатный 30-минутный разбор вашей задачи доступна прямо сейчас!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
