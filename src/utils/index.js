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

module.exports = {
  capitalize,
  lowercase,
  truncateExcerpt,
  stripTags,
  slugify
}
