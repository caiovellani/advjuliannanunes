'use client'

import { Export } from '@phosphor-icons/react'
import Link from 'next/link'

export function AppointmentLinks() {
  const phoneNumber = '5521982837633'
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

  return (
    <div className="pt-8 flex flex-col gap-4 justify-between">
      <Link
        href={`https://wa.me/${phoneNumber}?text=${messageAppointment}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-[350px] border border-[#aa895d] bg-amber-50/80 text-black rounded-xl p-3 flex justify-between items-center"
      >
        Agendar atendimento
        <Export className="size-6" />
      </Link>
      <Link
        href={`https://wa.me/${phoneNumber}?text=${messageRetiree}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-[350px] bg-amber-50/80 text-black rounded-xl border border-[#aa895d] p-3 flex justify-between items-center"
      >
        Quero me aposentar
        <Export className="size-6" />
      </Link>
      <Link
        href={`https://wa.me/${phoneNumber}?text=${messageRetirementReview}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-[350px] border border-[#aa895d] bg-amber-50/80 text-black rounded-xl p-3 flex justify-between items-center"
      >
        Revisão de aposentadoria
        <Export className="size-6" />
      </Link>
      <Link
        href={`https://wa.me/${phoneNumber}?text=${messagePensionPlanning}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-[350px] border border-[#aa895d] bg-amber-50/80 text-black rounded-xl p-3 flex justify-between items-center"
      >
        Planejamento previdenciário
        <Export className="size-6" />
      </Link>
    </div>
  )
}
