const capitalize = string => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const lowercase = string => {
  return string.charAt(0).toLowerCase() + string.slice(1)
}

const truncateExcerpt = string => {
  return stripTags(string).slice(0, -11)
}

const stripTags = string => {
  if (string === null || string === '') return false
  return string.replace(/<[^>]*>/g, '')
}

const stripHTML = string => string.replace(/<[^>]+>/g, '')

const slugify = string => {
  return string
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
}

const getColorForSection = (section) => {
  switch (section) {
    case 'blog':
      return 'var(--color-green)'
    case 'notes':
      return 'var(--color-purple)'
    case 'books':
      return 'var(--color-blue)'
    case 'quotes':
      return 'var(--color-red)'
    default:
      return 'var(--color-yellow)'
  }
}

module.exports = {
  capitalize,
  lowercase,
  truncateExcerpt,
  stripTags,
  stripHTML,
  slugify,
  getColorForSection
}
