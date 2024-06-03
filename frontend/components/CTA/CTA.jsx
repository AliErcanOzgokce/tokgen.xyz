import React from 'react'

export default function CTA() {
  return (
    <section className="py-20 flex flex-col items-center justify-center gap-10 text-center glass bg-base-300">
      <h1 className="text-5xl font-bold max-md:text-3xl max-md:w-5/6">Generate Your Token Today!</h1>
      <p className="text-base-content/80 text-md max-w-lg max-md:text-sm max-md:w-4/5">Choose from our variety of options for all type of tokens with all features such as Minting, Burning, Taxes, Dividends, Unlimited Supply and more.</p>
      <button className="btn btn-primary">Get Started!</button>
    </section>
  )
}
