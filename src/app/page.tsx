import {
  Export,
  LinkedinLogo,
  TwitterLogo,
  WhatsappLogo,
} from '@phosphor-icons/react/dist/ssr'

export default function Home() {
  return (
    <main className="flex items-center justify-center max-w-3xl p-9">
      <div className="flex flex-col items-center">
        <div className="border rounded-full size-24 flex items-center justify-center">
          Imagem
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
          <button className="cursor-pointer">
            <WhatsappLogo className="size-8" />
          </button>
          <button className="cursor-pointer">
            <TwitterLogo className="size-8" />
          </button>
          <button className="cursor-pointer">
            <LinkedinLogo className="size-8" />
          </button>
        </div>

        <div className="pt-8 flex flex-col gap-4 justify-between">
          <button className="w-[350px] cursor-pointer bg-amber-50/80 text-black rounded-xl border p-3 flex justify-between items-center">
            Agendar atendimento
            <Export className="size-6" />
          </button>
          <button className="w-[350px] cursor-pointer bg-amber-50/80 text-black rounded-xl border p-3 flex justify-between items-center">
            Quero me aposentar
            <Export className="size-6" />
          </button>
          <button className="w-[350px] cursor-pointer bg-amber-50/80 text-black rounded-xl border p-3 flex justify-between items-center">
            Revisão de aposentadoria
            <Export className="size-6" />
          </button>
          <button className="w-[350px] cursor-pointer bg-amber-50/80 text-black rounded-xl border p-3 flex justify-between items-center">
            Planejamento previdenciário
            <Export className="size-6" />
          </button>
        </div>
        <div className="w-full border-t flex flex-col border-white/20 mt-12 pt-6 text-center text-sm text-zinc-50">
          <span>Feito por Caio Vellani</span>
          <span className="mt-2">Todos os direitos reservados © 2025</span>
        </div>
      </div>
    </main>
  )
}
