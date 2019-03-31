export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export function lowercase(string) {
  return string.charAt(0).toLowerCase() + string.slice(1)
}

export function truncateExcerpt(string) {
  return stripTags(string).slice(0, -11)
}

export function stripTags(string) {
  if (string === null || string === '') return false

  return string.replace(/<[^>]*>/g, '')
}
