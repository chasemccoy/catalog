export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function lowercase(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}

export function truncateExcerpt(string) {
  return stripTags(string).slice(0, -5);
}

export function stripTags(string) {
  var div = document.createElement("div");
  div.innerHTML = string;
  return div.innerText;
}
