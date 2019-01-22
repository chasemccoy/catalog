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

export const mergePostsByDateFromData = data => {
  let allPosts = [...data.mdxPosts.edges, ...data.posts.edges]

  allPosts = allPosts.sort((a, b) => {
    const firstDate = a.node.frontmatter ? a.node.frontmatter.rawDate : a.node.rawDate
    const secondDate = b.node.frontmatter ? b.node.frontmatter.rawDate : b.node.rawDate
    return new Date(secondDate) - new Date(firstDate)
  })

  return allPosts
}

export const slugify = string => {
  return string
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}