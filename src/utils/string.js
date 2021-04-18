// clean removes newlines and superfluous spaces from query.
const clean = (string) => {
  return string.replace(/\n|\s{1,}(?=\s)/g, "").trim()
}

const stripToInt = (string) => {
  return parseInt(string.replace(/[a-z]+/, ""))
}

export { clean, stripToInt }
