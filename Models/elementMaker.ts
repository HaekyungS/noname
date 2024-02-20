export const tagMaker = (
  tag: string,
  parents: Element,
  props = {}
): Element => {
  const element = document.createElement(tag)
  parents.appendChild(element)
  Object.assign(element, props)
  return element
}
