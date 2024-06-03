import React from "react";

export default function FAQ() {
  return (
    <section className="bg-base-300 text-base-content" id="faq">
      <div className="py-24 px-8 max-w-7xl mx-auto flex flex-row max-md:flex-col  gap-12">
        <div className="flex flex-col text-left basis-1/2 max-md:px-5">
          <p className="sm:text-4xl text-3xl font-extrabold text-base-content mb-8 ">
            Frequently Asked Questions
          </p>
          <div className="text-base-content/80">
            Have another question? Contact me on{" "}
            <a className="link hover:link-primary" href="https://x.com/Michelangelo072">
              Twitter
            </a>{" "}
            or by{" "}
            <a className="link hover:link-primary" href="mailto:aliercanozgokce@gmail.com">
              Email
            </a>
          </div>
        </div>
        <div className="w-3/5 max-md:w-full">
          <div className="collapse collapse-plus bg-base-300 border-b rounded-none border-primary">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-bold">
              What is My Token Address?
            </div>
            <div className="collapse-content">
              <p className="font-light text-base-content/80">
                After your transaction is confirmed, you will first receive a
                transaction hash. Once fully confirmed, your token address will
                be provided. If there are network delays, you can track the
                transaction progress, and your token address will appear on the
                transaction page.
              </p>
            </div>
          </div>
          <div  className="collapse collapse-plus bg-base-300 border-b rounded-none border-primary">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-bold">
              Who Will Be the Token Owner?
            </div>
            <div className="collapse-content">
              <p className="font-light text-base-content/80">
                The address used to deploy the token will be designated as the
                token owner, holding all the elevated permissions you have
                selected.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-300 border-b rounded-none border-primary">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-bold">
              Where Will the Tokens Go After Deployment?
            </div>
            <div className="collapse-content">
              <p className="font-light text-base-content/80">
                The initial token supply will be minted to the address that
                created the token. This address will also be the token owner,
                possessing all elevated permissions.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-300 border-b rounded-none border-primary">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-bold">
              Which Wallets Are Supported?
            </div>
            <div className="collapse-content">
              <p className="font-light text-base-content/80">
                All tokens created on Create My Token are fully compatible with
                all wallets, including hardware wallets like Ledger and Trezor.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-300 border-b rounded-none border-primary">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-bold">
              Can I Trade My Token on Exchanges and Use It in Protocols?
            </div>
            <div className="collapse-content">
              <p className="font-light text-base-content/80">
                Absolutely! Your token can be utilized on any platform that
                supports standard tokens, including exchanges, DEXs, and DeFi
                protocols such as Uniswap.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-300 ">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-bold">
              Is the Source Code Verified on Block Explorers Like Etherscan?
            </div>
            <div className="collapse-content">
              <p className="font-light text-base-content/80">
                Absolutely! Your token will automatically receive a green
                checkmark verification on block explorers such as Etherscan.
                There is no extra action needed on your part.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
