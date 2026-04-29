function render(regions) {
  return regions.map((r) => r.value).join('')
}

module.exports = {
  render,
}
