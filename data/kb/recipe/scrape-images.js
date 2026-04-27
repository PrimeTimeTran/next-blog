console.log('Scrape images script loaded')
async function fetchAndDownload(url, filename) {
  try {
    const response = await fetch(url)
    if (!response.ok) throw new Error(`HTTP ${response.status}`)

    const blob = await response.blob()
    const objectUrl = URL.createObjectURL(blob)

    const a = document.createElement('a')
    a.href = objectUrl
    a.download = filename
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)

    URL.revokeObjectURL(objectUrl)
  } catch (err) {
    console.warn('Failed:', url, err.message)
  }
}
function changeToPhotos() {
  const photoSpan = Array.from(document.querySelectorAll('span')).find((el) =>
    el.textContent.includes('Photo')
  )

  if (photoSpan) {
    console.log('Found:', photoSpan, '->', photoSpan.textContent.trim())
    photoSpan.click()
  } else {
    console.warn("No <span> containing 'Photo' found.")
  }
}

function getImageUrls() {
  console.log('getImageUrls')
  const thumbs = document.querySelectorAll('img[ng-click^="openImageModal"]')
  const srcList = Array.from(thumbs).map(
    (img) => img.getAttribute('src') || img.getAttribute('ng-src')
  )
  console.log(srcList)
  const originalList = srcList
    .filter((item) => item != null)
    .map((url) => url.replace('small', 'original'))
  return originalList
}

async function start() {
  changeToPhotos()

  await new Promise((resolve) => setTimeout(resolve, 2000))

  const urls = getImageUrls()
  console.log('Downloading', urls.length, 'images...')

  let prefix = document.title.replace(/[\\/:*?"<>|]/g, '_').trim()

  for (let i = 0; i < urls.length; i++) {
    await fetchAndDownload(urls[i], `${prefix}_photo_${i + 1}.jpg`)
  }

  return urls.length
}

start().then((count) => {
  console.log(`Done triggering ${count} downloads`)
})
