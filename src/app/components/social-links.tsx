'use client'

import {
  WhatsappLogo,
  InstagramLogo,
  LinkedinLogo,
} from '@phosphor-icons/react'
import Link from 'next/link'

export function SocialLinks() {
  const phoneNumber = '5521982837633'
  const message = encodeURIComponent('Olá, gostaria de tirar algumas dúvidas!')

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`
  const instagramLink = 'https://www.instagram.com/adv.juliannanunes/'
  const linkedinLink = 'https://www.linkedin.com/in/julianna-nunes-214042154/'

  return (
    <div className="pt-8 flex justify-between gap-8">
      <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <WhatsappLogo className="size-8 text-zinc-100" />
      </Link>
      <Link href={instagramLink} target="_blank" rel="noopener noreferrer">
        <InstagramLogo className="size-8 text-zinc-100" />
      </Link>
      <Link href={linkedinLink} target="_blank" rel="noopener noreferrer">
        <LinkedinLogo className="size-8 text-zinc-100" />
      </Link>
    </div>
  )
}
