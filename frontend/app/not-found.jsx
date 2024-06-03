import React from 'react'

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-base-100 gap-10 max-md:min-h-96 max-md:py-80">
    <div className="flex flex-col ">
      <h1 className="text-primary text-4xl max-sm:text-3xl font-bold">404</h1>
      <h1 className='text-6xl max-sm:text-5xl font-extrabold'>Page Not Found!</h1>
    </div>
        <button className='btn btn-primary'>
            <a href='/'>
                Turn to Main Page
            </a>
        </button>
    </main>
  )
}
