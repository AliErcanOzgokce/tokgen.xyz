import React from "react";
import Image from "next/image";
import objective from "@/assets/icons/objective.png";
import handshake from "@/assets/icons/handshake.png";
import key from "@/assets/icons/key.png";
import open_book from "@/assets/icons/open-book.png";
import vision from "@/assets/icons/vision.png";
import analysis from "@/assets/icons/analysis.png";

export default function Features() {
  return (
    <section
      className="min-h-96 py-20 bg-base-200 flex flex-col items-center gap-10 text-base-content"
      id="features"
    >
      <div className="flex flex-col gap-6 items-center">
        <h1 className="text-5xl font-bold max-md:text-3xl max-md:w-5/6 text-center">
          Unmatched Quality, No Matter Your Choice
        </h1>
        <p className="text-base-content/80 max-w-3xl text-center max-md:w-4/5">
          We provide a comprehensive set of features with all our tokens. Every
          token includes these standard features at no additional cost, ensuring
          you receive the highest quality and security from the start.
        </p>
      </div>
      <div className=" grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1 max-sm:grid-cols-1">
        <div className="card w-96  px-2 py-10 text-center">
          <figure>
            <Image
              src="https://s3.eu-north-1.amazonaws.com/tokgen.xyz/assets/icons/objective.png"
              height={80}
              width={80}
              alt="fully_spec_complaint"
            />
          </figure>
          <div className="card-body items-center">
            <h3 className="text-sm text-success">Fully Spec Compliant</h3>
            <h2 className="card-title text-xl font-bold">
              Compatible with all wallets and exchanges.
            </h2>
            <p className="text-sm font-light">
              Every token undergoes rigorous testing to ensure full compliance
              with industry standards.
            </p>
          </div>
        </div>
        <div className="card w-96  px-2 py-10 text-center">
          <figure>
            <Image
              src="https://s3.eu-north-1.amazonaws.com/tokgen.xyz/assets/icons/key.png"
              height={80}
              width={80}
              alt="security_audited"
            />
          </figure>
          <div className="card-body items-center">
            <h3 className="text-sm text-success">Thoroughly Audited</h3>
            <h2 className="card-title text-xl font-bold">
              Security tested by top experts.
            </h2>
            <p className="text-sm font-light">
              Each token is audited to adhere to the highest security practices
              and standards.
            </p>
          </div>
        </div>
        <div className="card w-96  px-2 py-10 text-center">
          <figure>
            <Image
              src="https://s3.eu-north-1.amazonaws.com/tokgen.xyz/assets/icons/open-book.png"
              height={80}
              width={80}
              alt="security_standard"
            />
          </figure>
          <div className="card-body items-center">
            <h3 className="text-sm text-success">
              Formally Verified for Maximum Security
            </h3>
            <h2 className="card-title text-xl font-bold">
              Ensuring the highest security standard.
            </h2>
            <p className="text-sm font-light">
              All tokens undergo formal verification to guarantee safety and
              security.
            </p>
          </div>
        </div>
        <div className="card w-96  px-2 py-10 text-center">
          <figure>
            <Image
              src="https://s3.eu-north-1.amazonaws.com/tokgen.xyz/assets/icons/analysis.png"
              height={80}
              width={80}
              alt="pre_verified"
            />
          </figure>
          <div className="card-body items-center">
            <h3 className="text-sm text-success">Pre-Verified Source Code</h3>
            <h2 className="card-title text-xl font-bold">
              Instant verification on major block explorers.
            </h2>
            <p className="text-sm font-light">
              Tokens are pre-verified, appearing as verified immediately upon
              creation.
            </p>
          </div>
        </div>
        <div className="card w-96 items-center px-2 py-10 text-center">
          <figure className="rounded-none">
            <Image
              src="https://s3.eu-north-1.amazonaws.com/tokgen.xyz/assets/icons/vision.png"
              height={80}
              width={80}
              alt="access-control"
            />
          </figure>
          <div className="card-body items-center">
            <h3 className="text-sm text-success">Advanced Access Control</h3>
            <h2 className="card-title text-xl font-bold text-center">
              Exclusive access for you.
            </h2>
            <p className="text-sm font-light">
              Tokens include advanced access control features, ensuring only you
              have full control over all token functions.
            </p>
          </div>
        </div>
        <div className="card w-96  px-2 py-10 text-center">
          <figure>
            <Image
              src="https://s3.eu-north-1.amazonaws.com/tokgen.xyz/assets/icons/handshake.png"
              height={80}
              width={80}
              alt="trust_confidence"
            />
          </figure>
          <div className="card-body items-center">
            <h3 className="text-sm text-success">Proven Trust & Confidence</h3>
            <h2 className="card-title text-xl font-bold">
              Outstanding track record.
            </h2>
            <p className="text-sm font-light">
              With over 3 years of experience, our tokens are trusted by
              thousands, reflecting our unmatched reliability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
