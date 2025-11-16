import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CandlestickChart, LineChart, GraduationCap, Wallet, ShieldCheck, Mail, Phone, MapPin, Star, Menu } from 'lucide-react'
import Spline from '@splinetool/react-spline'

function Navbar() {
  const [open, setOpen] = React.useState(false)
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 md:py-4 backdrop-blur supports-[backdrop-filter]:bg-white/50 bg-white/70 rounded-xl mt-3 md:mt-4 shadow-sm border border-white/60">
          <a href="/" className="flex items-center gap-2 pl-4">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-400 shadow-inner" />
            <span className="text-lg md:text-xl font-semibold tracking-tight">Tweezer</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
            <a href="#services" className="hover:text-slate-900 transition-colors">Services</a>
            <a href="#approach" className="hover:text-slate-900 transition-colors">Approach</a>
            <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
            <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
          </nav>
          <div className="hidden md:flex pr-4">
            <a href="#contact" className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors">
              Start a Consultation <ArrowRight size={16} />
            </a>
          </div>
          <button className="md:hidden p-3 mr-2 rounded-lg hover:bg-white/60 focus:outline-none focus:ring-2 focus:ring-indigo-500" onClick={() => setOpen(v => !v)} aria-label="Toggle Menu" aria-expanded={open}>
            <Menu />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mt-2 rounded-xl bg-white shadow-lg overflow-hidden border border-slate-200">
            <a href="#services" className="block px-6 py-3 border-b hover:bg-slate-50" onClick={() => setOpen(false)}>Services</a>
            <a href="#approach" className="block px-6 py-3 border-b hover:bg-slate-50" onClick={() => setOpen(false)}>Approach</a>
            <a href="#about" className="block px-6 py-3 border-b hover:bg-slate-50" onClick={() => setOpen(false)}>About</a>
            <a href="#contact" className="block px-6 py-3 hover:bg-slate-50" onClick={() => setOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section className="relative h-[78vh] sm:h-[84vh] md:h-[88vh] w-full">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/50 to-white/95 pointer-events-none" />
      <div className="relative h-full mx-auto max-w-7xl px-6 flex items-center">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900"
          >
            Share‑market trading and portfolio guidance you can trust.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 sm:mt-5 text-base sm:text-xl text-slate-700"
          >
            Tweezer partners with retail traders and investors to deliver actionable insights, disciplined strategy, and long‑term portfolio outcomes.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3"
          >
            <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl hover:bg-slate-800 transition-colors w-full sm:w-auto">
              Book a Discovery Call <ArrowRight size={18} />
            </a>
            <a href="#services" className="inline-flex items-center justify-center gap-2 bg-white/80 backdrop-blur border border-slate-200 px-6 py-3 rounded-xl hover:bg-white transition-colors w-full sm:w-auto">
              Explore Services
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 sm:mt-8 flex items-center gap-4 sm:gap-6"
          >
            <div className="flex -space-x-2">
              {[1,2,3,4].map(i => (
                <div key={i} className="h-8 w-8 sm:h-9 sm:w-9 rounded-full ring-2 ring-white bg-gradient-to-br from-indigo-400 to-cyan-400" />
              ))}
            </div>
            <p className="text-xs sm:text-sm text-slate-600">Trusted by 50+ active clients with personalized strategies.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Services() {
  const items = [
    {
      icon: <CandlestickChart className="h-6 w-6 text-indigo-600" />, 
      title: 'Trading Insights',
      desc: 'Daily setups, risk parameters, and execution plans for equities and indices.'
    },
    {
      icon: <LineChart className="h-6 w-6 text-indigo-600" />, 
      title: 'Market Analysis',
      desc: 'Macro and sector rotation views with technical and quantitative context.'
    },
    {
      icon: <Wallet className="h-6 w-6 text-indigo-600" />, 
      title: 'Portfolio Guidance',
      desc: 'Position sizing, hedging, and rebalancing tuned for your goals and risk.'
    },
    {
      icon: <GraduationCap className="h-6 w-6 text-indigo-600" />, 
      title: 'Education & Support',
      desc: '1:1 coaching, playbooks, and ongoing support for retail traders and investors.'
    },
  ]
  return (
    <section id="services" className="py-16 sm:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-slate-900">Services</h2>
          <p className="mt-3 text-slate-600">Clear, disciplined processes to navigate changing markets with confidence.</p>
        </div>
        <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {items.map((it, idx) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group rounded-2xl border border-slate-200 p-5 sm:p-6 bg-white hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              <div className="h-11 w-11 sm:h-12 sm:w-12 rounded-xl bg-indigo-50 grid place-items-center mb-4">
                {it.icon}
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-slate-900">{it.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Metrics() {
  const stats = [
    { label: 'Active Clients', value: '50+' },
    { label: 'Years of Experience', value: '10+' },
    { label: 'Win‑rate Focused Setups', value: 'Disciplined' },
    { label: 'Assets Monitored', value: 'Equities • Indices • ETFs' },
  ]
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-indigo-50 via-sky-50 to-cyan-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 text-center shadow-sm">
              <div className="text-xl sm:text-2xl font-semibold text-slate-900">{s.value}</div>
              <div className="mt-1 text-xs sm:text-sm text-slate-600">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Approach() {
  const steps = [
    { title: 'Discover', desc: 'Understand goals, constraints, and risk tolerance.' },
    { title: 'Strategy', desc: 'Define entries, exits, and risk per trade with position sizing.' },
    { title: 'Execute', desc: 'Real‑time guidance and disciplined execution across setups.' },
    { title: 'Review', desc: 'Ongoing analytics, playbook updates, and performance tracking.' },
  ]
  return (
    <section id="approach" className="py-16 sm:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-slate-900">Our Approach</h2>
          <p className="mt-3 text-slate-600">A structured framework designed to protect capital and compound returns.</p>
        </div>
        <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6">
          {steps.map((st, i) => (
            <motion.div
              key={st.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-slate-200 p-5 sm:p-6 bg-white hover:shadow-md transition-shadow"
            >
              <div className="text-xs sm:text-sm font-medium text-indigo-600">Step {i + 1}</div>
              <h3 className="mt-1 text-base sm:text-lg font-semibold text-slate-900">{st.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{st.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Trust() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-slate-50" id="about">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-slate-900">Experienced, client‑first, and risk‑aware.</h2>
            <p className="mt-4 text-slate-600">Tweezer is led by an experienced trader with a decade in the markets, guiding retail clients with disciplined process over prediction. We combine technicals, market structure, and risk management to create repeatable results.</p>
            <ul className="mt-6 space-y-3 text-slate-700">
              <li className="flex items-start gap-3"><ShieldCheck className="mt-0.5 text-indigo-600" size={20}/> Transparent, rules‑based decision making</li>
              <li className="flex items-start gap-3"><ShieldCheck className="mt-0.5 text-indigo-600" size={20}/> Accountable performance reviews</li>
              <li className="flex items-start gap-3"><ShieldCheck className="mt-0.5 text-indigo-600" size={20}/> Education that builds independence</li>
            </ul>
            <div className="mt-6 flex items-center gap-2 text-amber-500">
              {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#f59e0b" className="text-amber-500" />)}
              <span className="ml-2 text-xs sm:text-sm text-slate-600">Client‑rated guidance</span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-br from-indigo-200 via-sky-200 to-cyan-200 rounded-3xl blur-xl opacity-60" aria-hidden />
            <div className="relative rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xl">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="rounded-2xl bg-gradient-to-br from-indigo-50 to-white p-3 sm:p-4">
                  <div className="text-xs text-slate-500">Risk per trade</div>
                  <div className="text-xl sm:text-2xl font-semibold">0.5% - 1.0%</div>
                </div>
                <div className="rounded-2xl bg-gradient-to-br from-cyan-50 to-white p-3 sm:p-4">
                  <div className="text-xs text-slate-500">Setup quality</div>
                  <div className="text-xl sm:text-2xl font-semibold">A / B+</div>
                </div>
                <div className="rounded-2xl bg-gradient-to-br from-sky-50 to-white p-3 sm:p-4">
                  <div className="text-xs text-slate-500">Hold time</div>
                  <div className="text-xl sm:text-2xl font-semibold">Days → Weeks</div>
                </div>
                <div className="rounded-2xl bg-gradient-to-br from-violet-50 to-white p-3 sm:p-4">
                  <div className="text-xs text-slate-500">Focus</div>
                  <div className="text-xl sm:text-2xl font-semibold">Capital Protection</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-indigo-50 via-sky-50 to-cyan-50 p-6 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl sm:text-3xl font-semibold tracking-tight text-slate-900">Ready to elevate your trading and portfolio?</h3>
              <p className="mt-3 text-slate-600">Book a no‑obligation 20‑minute discovery call. We’ll understand where you are, what you’re aiming for, and how we can help.</p>
              <div className="mt-6 space-y-3 text-slate-700">
                <div className="flex items-center gap-3"><Mail className="text-indigo-600" size={18}/> hello@tweezer.trade</div>
                <div className="flex items-center gap-3"><Phone className="text-indigo-600" size={18}/> +1 (555) 000‑1234</div>
                <div className="flex items-center gap-3"><MapPin className="text-indigo-600" size={18}/> Remote • Global</div>
              </div>
            </div>
            <div>
              <form onSubmit={(e) => e.preventDefault()} className="rounded-2xl bg-white p-5 sm:p-6 border border-slate-200 shadow-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-slate-600">First name</label>
                    <input className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Jane" />
                  </div>
                  <div>
                    <label className="text-sm text-slate-600">Last name</label>
                    <input className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Doe" />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="text-sm text-slate-600">Email</label>
                  <input type="email" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="you@example.com" />
                </div>
                <div className="mt-4">
                  <label className="text-sm text-slate-600">What would you like to achieve?</label>
                  <textarea rows={4} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Tell us a little about your goals" />
                </div>
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <a href="mailto:hello@tweezer.trade" className="inline-flex justify-center items-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-lg hover:bg-slate-800 w-full sm:w-auto">
                    Send Email <ArrowRight size={16} />
                  </a>
                  <a href="#" className="inline-flex justify-center items-center gap-2 bg-white border border-slate-300 px-5 py-3 rounded-lg hover:bg-slate-50 w-full sm:w-auto">
                    Download Brochure
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-400" />
            <span className="font-semibold">Tweezer</span>
          </div>
          <div className="text-sm text-slate-600">© {new Date().getFullYear()} Tweezer. All rights reserved.</div>
          <div className="flex items-center gap-4 text-sm text-slate-700">
            <a href="#services" className="hover:text-slate-900">Services</a>
            <a href="#approach" className="hover:text-slate-900">Approach</a>
            <a href="#about" className="hover:text-slate-900">About</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Services />
      <Metrics />
      <Approach />
      <Trust />
      <Contact />
      <Footer />
    </div>
  )
}
