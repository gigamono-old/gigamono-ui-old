import { stripToInt } from "./string"

const getCSSVar = (name) => {
  return getComputedStyle(document.documentElement).getPropertyValue(name)
}

const convertRemtoPxInt = (remStr) => {
  return stripToInt(remStr) * 16
}

export { getCSSVar, convertRemtoPxInt }
