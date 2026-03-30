# Integración del bot de WhatsApp con la web deployada en Vercel

## Respuesta corta
No conviene correr `bot-whatsapp-master-pro-v5` dentro de Vercel.

## Por qué
El bot usa Baileys y necesita:
- conexión persistente a WhatsApp Web
- sesión guardada en archivos
- proceso Node vivo todo el tiempo
- timers para seguimientos

Vercel está pensado principalmente para frontend estático y funciones serverless cortas. Ese modelo no es estable para este bot.

## Arquitectura correcta
- **Web**: Vercel
- **Bot WhatsApp + panel**: Railway, Render, VPS o PC siempre encendida
- **Conexión entre ambos**: webhook HTTP

## Qué quedó preparado en esta versión
En `src/config/site.js` agregué:
- `integrations.leadWebhookUrl`
- `integrations.leadWebhookToken`

Y el simulador de presupuesto ahora:
1. guarda leads localmente en el navegador
2. arma el mensaje de WhatsApp automáticamente
3. puede enviar el lead a un webhook externo si configurás la URL

## Cómo integrarlo después
1. Deployar el bot en Railway/Render/VPS
2. Crear un endpoint POST, por ejemplo:
   - `https://tu-bot-production.up.railway.app/api/web-lead`
3. Pegar esa URL en `SITE.integrations.leadWebhookUrl`
4. Desde ese endpoint:
   - guardar lead
   - enviarlo a tu panel
   - disparar automatización
   - notificar a un humano

## Recomendación práctica
Primero subí esta web nueva a Vercel.
Después, cuando me pases el ZIP del bot ajustado para webhook, te lo dejo listo para conectarse con esta web.
