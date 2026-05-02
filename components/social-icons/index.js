// Icons taken from: https://simpleicons.org/
import Mail from './mail.svg'
import Github from './github.svg'
import Facebook from './facebook.svg'
import Youtube from './youtube.svg'
import Linkedin from './linkedin.svg'
import Twitter from './twitter.svg'

import { AiOutlineMail } from 'react-icons/ai'

import { FaGithub, FaFacebook, FaYoutube, FaLinkedin, FaTwitter } from 'react-icons/fa'

const components = {
  mail: AiOutlineMail,
  github: FaGithub,
  facebook: FaFacebook,
  youtube: FaYoutube,
  linkedin: FaLinkedin,
  twitter: FaTwitter,
}

const SocialIcon = ({ kind, href, size = 20 }) => {
  if (!href) return null

  const Icon = components[kind]
  if (!Icon) return null

  return (
    <a
      className="text-gray-500 transition hover:text-gray-600 dark:text-gray-200 dark:hover:text-blue-400"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <Icon size={size} />
    </a>
  )
}

export default SocialIcon
