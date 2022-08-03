export default function easyPost(
  input: string | URL | Request,
  init?: RequestInit | undefined
  // deno-lint-ignore no-explicit-any
): Promise<Record<string, any>> {
  return fetch(input, {
    method: 'POST',
    ...init,
  }).then(async (x) => {
    if (x.status >= 400) {
      const body = await x.text()
      console.log('EasyPost Error:', x, body)
      throw body
    }
    return x.json()
  })
}
