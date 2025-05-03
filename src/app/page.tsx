import { AppointmentLinks } from '@/app/components/appointment-links'
import { SocialLinks } from '@/app/components/social-links'
import { Footer } from '@/app/components/footer'
import { Hero } from '@/app/components/hero'

export default function Home() {
  return (
    <main className="flex items-center justify-center max-w-3xl p-9">
      <div className="flex flex-col items-center">
        <Hero />
        <SocialLinks />
        <AppointmentLinks />
        <Footer />
      </div>
    </main>
  )
}
