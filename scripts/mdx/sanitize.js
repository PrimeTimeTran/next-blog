import { DEBUG } from './config'
import { log } from './logs'

export function sanitize(region) {
  if (region.type !== 'text') return region

  let v = region.value

  if (DEBUG.sanitizer) {
    log('sanitizer', v.slice(0, 80))
  }

  v = v.replace(/<br>/g, '<br />')

  return { ...region, value: String(region.value) }
}
