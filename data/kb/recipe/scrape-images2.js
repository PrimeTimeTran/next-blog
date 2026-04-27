console.log('Scrape images script loaded')

function downloadViaWindow(url) {
  const win = window.open(url, '_blank')
  setTimeout(() => win?.close(), 500)
}

function downloadBlob(url, filename) {
  fetch(url)
    .then((res) => res.blob())
    .then((blob) => {
      const objectUrl = URL.createObjectURL(blob)

      const a = document.createElement('a')
      a.href = objectUrl
      a.download = filename
      a.style.display = 'none'

      document.body.appendChild(a)
      a.click()
      a.remove()

      URL.revokeObjectURL(objectUrl)
    })
    .catch((err) => console.warn('Download failed:', url, err.message))
}

function downloadDirect(url, filename) {
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  a.remove()
}

function getImageUrls() {
  console.log('Scanning images...')

  const imgs = document.querySelectorAll('img')

  const urls = Array.from(imgs)
    .map((img) => img.src || img.getAttribute('src'))
    .filter(Boolean)
    .filter((url) => url.includes('banhmyus.com/images'))
    .map((url) => url.replace('small', 'original'))

  console.log(`Found ${urls.length} images`)
  return urls
}

async function start() {
  await new Promise((r) => setTimeout(r, 2000))

  const urls = getImageUrls()

  if (!urls.length) {
    console.warn('No images found — selector mismatch likely')
    return
  }

  const prefix = document.title.replace(/[\\/:*?"<>|]/g, '_').trim()

  console.log('Starting downloads...')

  for (let i = 0; i < urls.length; i++) {
    console.log('Downloading:', urls[i])
    downloadBlob(urls[i], `${prefix}_photo_${i + 1}.jpg`)
    await new Promise((r) => setTimeout(r, 300)) // prevents Chrome blocking
  }

  console.log(`Done: ${urls.length} downloads triggered`)
  return urls.length
}

start()
