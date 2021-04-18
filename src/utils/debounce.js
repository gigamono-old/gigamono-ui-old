// debounce prevents execution succession until delay is over.
const debounce = (f, delay) => {
  let timeout
  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      f(...args)
    }, delay)
  }
}

export { debounce }
