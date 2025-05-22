
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Swaram | Business, Manpower & Events</title>
      </Head>
      <header className="bg-richGreen text-white px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Image src="/logo.png" alt="Swaram Logo" width={40} height={40} />
          <h1 className="text-2xl font-playfair text-gold">Swaram</h1>
        </div>
        <nav className="space-x-4">
          <a href="#about" className="text-gold font-medium">About</a>
          <a href="#services" className="text-gold font-medium">Services</a>
          <a href="#portfolio" className="text-gold font-medium">Portfolio</a>
          <a href="#contact" className="text-gold font-medium">Contact</a>
        </nav>
      </header>

      <main className="bg-offwhite text-charcoal">
        <section className="bg-richGreen text-white text-center py-16 px-4">
          <h2 className="text-5xl font-playfair mb-4">Where Business Meets Harmony</h2>
          <p className="text-lg max-w-2xl mx-auto mb-6">
            Empowering businesses through unified solutions in strategy, talent, and experience.
          </p>
          <button className="bg-gold text-richGreen px-6 py-3 rounded font-bold text-lg hover:scale-105 transition">
            Explore Services
          </button>
        </section>

        <section id="about" className="py-12 px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4">About Swaram</h2>
          <p className="max-w-3xl mx-auto">
            Swaram is a harmony of strategy, manpower, and event excellence. With integrity and innovation at our core,
            we serve enterprises looking to scale, optimize, and lead with purpose.
          </p>
        </section>

        <section id="services" className="py-12 px-4 bg-white">
          <h2 className="text-3xl text-center font-semibold mb-10">Our Services</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-white border border-richGreen p-6 rounded-lg shadow-lg max-w-xs w-full">
              <h3 className="text-xl font-bold text-richGreen mb-2">Business Solutions</h3>
              <p>From branding to operations, we provide tailored solutions for sustainable growth.</p>
            </div>
            <div className="bg-white border border-richGreen p-6 rounded-lg shadow-lg max-w-xs w-full">
              <h3 className="text-xl font-bold text-richGreen mb-2">Manpower Services</h3>
              <p>Expert recruitment, HR support, and workforce management for growing businesses.</p>
            </div>
            <div className="bg-white border border-richGreen p-6 rounded-lg shadow-lg max-w-xs w-full">
              <h3 className="text-xl font-bold text-richGreen mb-2">Event Management</h3>
              <p>Elegant, efficient, and impactful events for corporate, cultural, and private needs.</p>
            </div>
          </div>
        </section>

        <section id="portfolio" className="py-12 px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4">Our Portfolio</h2>
          <p>Case studies, client stories, and visual highlights coming soon.</p>
        </section>

        <section id="contact" className="py-12 px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
          <p>
            Email: <a href="mailto:sriram7cool@gmail.com" className="text-richGreen font-medium">sriram7cool@gmail.com</a><br />
            Phone: +91 90802 42595<br />
            Location: Hosur, India 635109
          </p>
        </section>
      </main>

      <footer className="bg-charcoal text-offwhite text-center py-6">
        <p>&copy; 2025 Swaram. All rights reserved.</p>
      </footer>
    </>
  )
}
