import React from "react";
import Image from "next/image";
import down from "@/assets/icons/arrow-down.svg"

export default function Problem() {
  return (
    <section className="min-h-4/5 flex flex-col items-center py-20">
      <div data-theme="bumblebee" className="card max-md:w-5/6 w-2/6 p-10  bg-secondary shadow-xl">
        <div className="card-body">
          <div className="text-center leading-loose">
            <p>+<span className="font-bold text-red-600"> 6 hrs</span> designing a landing page</p>
            <p>+<span className="font-bold text-red-600"> 4 hrs</span> to handle Stripe webhooks</p>
            <p>+<span className="font-bold text-red-600"> 2 hrs</span> for SEO tags</p>
            <p>+<span className="font-bold text-red-600"> 1 hrs</span> applying for Google Oauth</p>
            <p>+<span className="font-bold text-red-600"> 3 hrs</span> for DNS records</p>
            <p>+<span className="font-bold text-red-600"> 2 hrs</span> for protected API routes</p>
            <h3 className="font-bold text-2xl pt-4">= <span className="font-bold text-red-600"> 22+ hours</span> of headaches</h3>
          </div>
        </div>
      </div>
      <p className="text-sm pt-10 flex flex-row gap-2 items-center"><Image src={down} className="h-fit" height={10} /> There is an better way</p>
    </section>
  );
}
