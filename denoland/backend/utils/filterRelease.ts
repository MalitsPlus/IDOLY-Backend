export default function filterRelease<T extends { releaseDate: string }>(
  items: T[]
): T[] {
  return items.filter((x) => {
    return Number(new Date(Number(x.releaseDate))) <= Number(new Date())
  })
}
