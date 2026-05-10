export type ScheduleEvent = {
  day: string
  date: string
  title: string
  time: string
  location: string
  seats: number
  color: string
}

// Редактируемые слоты ближайших встреч.
// Чтобы обновить карточки на сайте, измените значения ниже.
export const scheduleEvents: ScheduleEvent[] = [
  {
    day: 'суббота',
    date: '17 мая 2026',
    title: 'Открытая сессия: «Видение бизнеса»',
    time: '10:00 – 12:30',
    location: 'Москва, пространство «Портал»',
    seats: 6,
    color: '#FF0000',
  },
  {
    day: 'воскресенье',
    date: '31 мая 2026',
    title: 'Открытая сессия: «Стратегия роста»',
    time: '11:00 – 13:30',
    location: 'Москва, пространство «Портал»',
    seats: 6,
    color: '#0055BF',
  },
  {
    day: 'суббота',
    date: '14 июня 2026',
    title: 'Открытая сессия: «Команда мечты»',
    time: '10:00 – 12:30',
    location: 'Москва, пространство «Портал»',
    seats: 6,
    color: '#00A550',
  },
]
