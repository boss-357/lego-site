import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const name = data?.name ?? ''
    const contact = data?.contact ?? ''
    const format = data?.format ?? ''
    const message = data?.message ?? ''

    if (!name || !contact) {
      return NextResponse.json(
        { success: false, message: 'Укажите имя и контакт' },
        { status: 400 }
      )
    }

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #FF0000; border-bottom: 3px solid #FFD700; padding-bottom: 10px;">
          🧱 Новая заявка с сайта LEGO Serious Play
        </h2>
        <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 10px 0;"><strong>Имя:</strong> ${name}</p>
          <p style="margin: 10px 0;"><strong>Контакт:</strong> ${contact}</p>
          <p style="margin: 10px 0;"><strong>Формат сессии:</strong> ${format || 'Не указан'}</p>
          <p style="margin: 10px 0;"><strong>Сообщение:</strong></p>
          <div style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #0055BF;">
            ${message || 'Без сообщения'}
          </div>
        </div>
        <p style="color: #666; font-size: 12px;">
          Отправлено: ${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' })}
        </p>
      </div>
    `

    const appUrl = process.env.NEXTAUTH_URL || ''
    let appName = 'LEGO Serious Play'
    try {
      appName = appUrl ? new URL(appUrl).hostname?.split('.')?.[0] ?? 'LEGO-SP' : 'LEGO-SP'
    } catch { appName = 'LEGO-SP' }

    let senderEmail = 'noreply@mail.abacusai.app'
    try {
      if (appUrl) senderEmail = `noreply@${new URL(appUrl).hostname}`
    } catch { /* keep default */ }

    const response = await fetch('https://apps.abacus.ai/api/sendNotificationEmail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        deployment_token: process.env.ABACUSAI_API_KEY,
        app_id: process.env.WEB_APP_ID,
        notification_id: process.env.NOTIF_ID_LEGO_SERIOUS_PLAY,
        subject: `Заявка LEGO Serious Play от ${name} (формат: ${format || 'не указан'})`,
        body: htmlBody,
        is_html: true,
        recipient_email: 'anzhelamikheeva@gmail.com',
        sender_email: senderEmail,
        sender_alias: appName,
      }),
    })

    const result = await response.json()
    if (!result?.success) {
      if (result?.notification_disabled) {
        return NextResponse.json({ success: true, message: 'Заявка принята' })
      }
      throw new Error(result?.message || 'Failed to send')
    }

    return NextResponse.json({ success: true, message: 'Заявка успешно отправлена' })
  } catch (error: any) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { success: false, message: 'Ошибка при отправке. Попробуйте позже.' },
      { status: 500 }
    )
  }
}
