'use client'

import {
  Export,
  LinkedinLogo,
  WhatsappLogo,
  InstagramLogo,
} from '@phosphor-icons/react/dist/ssr'

import logo from '@/../public/logo.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const phoneNumber = '5521982837633'
  const message = encodeURIComponent('Olá, gostaria de tirar algumas dúvidas!')
  const messageAppointment = encodeURIComponent(
    'Olá, gostaria de agendar um atendimento'
  )
  const messageRetiree = encodeURIComponent(
    'Olá, gostaria de me aposentar, você consegue me ajudar ?'
  )
  const messageRetirementReview = encodeURIComponent(
    'Olá, gostaria de fazer uma revisão da minha aposentadoria, consegue me ajudar?'
  )
  const messagePensionPlanning = encodeURIComponent(
    'Olá, gostaria de fazer um planejamento previdenciário, consegue me ajudar?'
  )

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`
  const instagramLink = 'https://www.instagram.com/adv.juliannanunes/'
  const linkedinLink = 'https://www.linkedin.com/in/julianna-nunes-214042154/'

  return (
    <main className="flex items-center justify-center max-w-3xl p-9">
      <div className="flex flex-col items-center">
        <div className="rounded-full size-24 flex items-center justify-center relative">
          <Image src={logo} alt="Logo JN" className="object-cover size-36" />
        </div>
        <div className="pt-8 flex flex-col">
          <p className="text-center font-bold text-xl bg-gradient-to-r from-[#aa895d] via-[#cba86e] to-[#aa895d] bg-clip-text text-transparent">
            Julianna Nunes
          </p>
          <span className="text-center mb-4 font-semibold">
            Advogada Previdenciária
          </span>
          <span className="text-center">
            Seja <strong>muito bem vindo(a)</strong> aos meus links!
            <br />
            <strong>Clique onde deseja</strong> e seja redirecionado!
          </span>
        </div>

        <div className="pt-8 flex justify-between gap-8">
          <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <WhatsappLogo className="size-8 text-[#AA895D]" />
          </Link>
          <Link href={instagramLink} target="_blank" rel="noopener noreferrer">
            <InstagramLogo className="size-8 text-[#AA895D]" />
          </Link>
          <Link href={linkedinLink} target="_blank" rel="noopener noreferrer">
            <LinkedinLogo className="size-8 text-[#AA895D]" />
          </Link>
        </div>

        <div className="pt-8 flex flex-col gap-4 justify-between">
          <Link
            href={`https://wa.me/${phoneNumber}?text=${messageAppointment}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[350px] bg-amber-50/80 text-black rounded-xl border p-3 flex justify-between items-center"
          >
            Agendar atendimento
            <Export className="size-6" />
          </Link>
          <Link
            href={`https://wa.me/${phoneNumber}?text=${messageRetiree}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[350px]  bg-amber-50/80 text-black rounded-xl border p-3 flex justify-between items-center"
          >
            Quero me aposentar
            <Export className="size-6" />
          </Link>
          <Link
            href={`https://wa.me/${phoneNumber}?text=${messageRetirementReview}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[350px]  bg-amber-50/80 text-black rounded-xl border p-3 flex justify-between items-center"
          >
            Revisão de aposentadoria
            <Export className="size-6" />
          </Link>
          <Link
            href={`https://wa.me/${phoneNumber}?text=${messagePensionPlanning}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[350px]  bg-amber-50/80 text-black rounded-xl border p-3 flex justify-between items-center"
          >
            Planejamento previdenciário
            <Export className="size-6" />
          </Link>
        </div>
        <div className="w-full border-t flex flex-col border-white/20 mt-12 pt-6 text-center text-sm text-zinc-50">
          <span>Feito por Caio Vellani</span>
          <span className="mt-2">Todos os direitos reservados © 2025</span>
        </div>
      </div>
    </main>
  )
}
