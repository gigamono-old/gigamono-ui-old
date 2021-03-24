// clean removes newlines and superfluos spaces from query.
export const clean = (string) => {
  return string.replace(/\n|\s{1,}(?=\s)/g, "").trim()
}
