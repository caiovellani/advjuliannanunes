import Link from 'next/link'

export function Footer() {
  return (
    <div className="w-full border-t flex flex-col border-white/20 mt-12 pt-6 text-center text-sm text-zinc-50">
      <Link
        href={'https://www.linkedin.com/in/caiovborges/'}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>
          Feito por <strong>Caio Vellani</strong>
        </span>
      </Link>
      <span className="mt-2">Todos os direitos reservados © 2025</span>
    </div>
  )
}
