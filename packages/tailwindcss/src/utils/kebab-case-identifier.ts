export const kebabCaseIdentifier = (string: string) =>
  string
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase()

export const getDomain = (string: string) => {
  const [domain] = string.replace(/([a-z])([A-Z])/g, "$1 $2").split(" ")

  return domain
}

export const getIdentifier = (string: string) => {
  const domain = getDomain(string)

  const identifier = string
    .replace(domain, "")
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .toLowerCase()

  return identifier
}
