import { AppointmentLinks } from '@/app/components/appointment-links'
import { SocialLinks } from '@/app/components/social-links'
import { Footer } from '@/app/components/footer'
import { Hero } from '@/app/components/hero'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col p-9">
      <div className="flex flex-1 flex-col items-center justify-center">
        <Hero />
        <SocialLinks />
        <AppointmentLinks />
      </div>
      <Footer />
    </main>
  )
}
