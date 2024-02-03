import { UMAMI_DOMAIN, UMAMI_WEBSITE_ID } from './env.ts'

export default async function ping(
  req: Request,
  remoteAddr: Deno.NetAddr
): Promise<void> {
  const url = new URL(req.url)
  await fetch(`https://${UMAMI_DOMAIN}/api/send`, {
    body: JSON.stringify({
      payload: {
        website: UMAMI_WEBSITE_ID,
        url: url.pathname + url.search,
        referrer: req.headers.get('Referer'),
        hostname: url.hostname,
        language: req.headers.get('Accept-Language'),
        screen: '1920x1080',
      },
      type: 'pageview',
    }),
    headers: {
      'User-Agent': req.headers.get('User-Agent') ?? '',
      'Content-Type': 'application/json',
      'X-Forwarded-For': remoteAddr?.hostname,
    },
    method: 'POST',
  }).then((x) => x.text())
}
