import Image from 'next/image'

import julianna from '@/../public/julianna.png'

export function Hero() {
  return (
    <>
      <div className="rounded-full border border-[#AA895D] size-24 overflow-hidden relative">
        <Image
          src={julianna}
          alt="Logo JN"
          className="object-cover w-full h-full"
        />
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
    </>
  )
}
