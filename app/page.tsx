import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Portfolio } from "@/components/portfolio"
import { Services } from "@/components/services"
import { OurTeam } from "@/components/our-team"
import { Testimonials } from "@/components/testimonials"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Portfolio />
        <OurTeam />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
