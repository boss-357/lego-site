import { DM_Sans, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import { ChunkLoadErrorHandler } from '@/components/chunk-load-error-handler'
import type { Metadata } from 'next'

export const dynamic = 'force-dynamic'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-sans' })
const jakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-display' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export async function generateMetadata(): Promise<Metadata> {
  const siteUrl = process.env.NEXTAUTH_URL || 'https://lego-serious-play.ru'
  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: 'LEGO Serious Play — сессии для бизнеса в Москве | Фасилитатор Анжела Михеева',
      template: '%s | LEGO Serious Play Москва',
    },
    description: 'LEGO Serious Play — инновационная методика для стратегического планирования, командообразования и решения бизнес-задач. Открытые, индивидуальные и групповые сессии в Москве. Сертифицированный фасилитатор Анжела Михеева.',
    keywords: ['LEGO Serious Play', 'лего серьезная игра', 'фасилитация', 'командообразование', 'тимбилдинг', 'стратегические сессии', 'бизнес-тренинг', 'корпоративный тренинг', 'Москва', 'стратегическое планирование', 'сплочение команды', 'трансформационные игры', 'коуч игра'],
    authors: [{ name: 'Анжела Михеева' }],
    openGraph: {
      title: 'LEGO Serious Play — бизнес-сессии в Москве',
      description: 'Стратегические сессии LEGO Serious Play для предпринимателей и команд. Откройте новые решения через игру.',
      url: siteUrl,
      siteName: 'LEGO Serious Play Москва',
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
      locale: 'ru_RU',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'LEGO Serious Play — бизнес-сессии в Москве',
      description: 'Стратегические сессии для предпринимателей и команд',
      images: ['/og-image.png'],
    },
    icons: {
      icon: '/favicon.svg',
      shortcut: '/favicon.svg',
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: siteUrl,
    },
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <script src="https://apps.abacus.ai/chatllm/appllm-lib.js"></script>
      </head>
      <body className={`${dmSans.variable} ${jakartaSans.variable} ${jetbrainsMono.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster />
          <ChunkLoadErrorHandler />
        </ThemeProvider>
      </body>
    </html>
  )
}
