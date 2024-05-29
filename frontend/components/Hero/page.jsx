import React from 'react'
import Image from 'next/image'
import hero from "@/assets/hero.png"

export default function page() {
  return (
    <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 lg:items-start px-8 py-8 lg:py-20">
      <div className="hero min-h-4/5 bg-base-100">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <Image src={hero} className="max-w-lg" />
    <div>
      <h1 className="text-5xl font-bold leading-snug">Create Any Token to Any Chain with <span class=" relative whitespace-nowrap"><span class="ml-3 absolute bg-neutral-content -left-1 -top-1 -bottom-1 -right-5 md:-left-3 md:-top-0 md:-bottom-0 md:-right-3 -rotate-1 "></span><span class="relative text-accent-content ml-3">One Click</span></span></h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    </section>
  )
}
