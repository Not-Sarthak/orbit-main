import React from 'react';
import CardComponent from './CardComponent';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xrgnpeaq");

  if (state.succeeded) {
    return <p className="text-green-500 pt-4">Thank you for reaching out! We will get back to you soon.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col max-w-md mx-auto border border-zinc-200 p-4 rounded-2xl bg-white">
      <label htmlFor="email" className="text-gray-700 mb-2">
        Email Address
      </label>
      <input
        id="email"
        type="email"
        name="email"
        className="p-2 mb-4 rounded-md focus:outline-none focus:ring focus:border-blue-300 border border-zinc-300"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <label htmlFor="message" className="text-gray-700 mb-2">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        className="border border-zinc-300 p-2 mb-4 rounded-md focus:outline-none focus:ring focus:border-blue-300"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <div className='flex justify-center'>
        <button
          type="submit"
          disabled={state.submitting}
          className="relative w-48 px-7 py-4 bg-[#eef5fd] hover:bg-gray-100 rounded-full flex items-center justify-center divide-x divide-gray-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          <span className="flex items-center justify-center">
            <span className="text-black group-hover:text-black transition duration-200">
              {state.submitting ? "Submitting..." : "Submit"}
            </span>
          </span>
        </button>
      </div>
    </form>
  );
}

const Footer = () => {
  return (
        <div className="inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
    <div className="bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]">
      <main className="flex flex-col items-center justify-start pt-20 lg:pt-32 h-screen w-full">
        <div className="space-y-1 relative">
          <h1 className="z-10 bg-gradient-to-br lg:h-[70px] w-full from-black to-stone-500 bg-clip-text text-center font-display text-2xl font-bold text-transparent drop-shadow-sm [text-wrap:balance] md:text-5xl">
            <div className="flex flex-col gap-3">
              <div>Still have questions?</div>
            </div>
          </h1>
          <p className="text-center text-gray-500 w-full md:text-xl">
            An opinionated collection of components, <br /> hooks, and utilities
            for your Next.js project.
          </p>
        </div>
        {/* <div className='flex gap-4 pt-10'>
            <div class="px-8">
                <div class="grid gap-8 items-start justify-center">
                    <div class="relative group">
                    <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-purple-300 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                    <button class="relative w-48 px-7 py-4 bg-white hover:bg-zinc-100 rounded-full leading-none flex items-center justify-center divide-x divide-gray-600">
                        <span class="flex items-center justify-center">
                            <span class="text-black group-hover:text-black transition duration-200">Schedule a demo</span>
                        </span>
                    </button>
                    </div>
                </div>
            </div>
        </div> */}
        <div className='py-10'>
          <ContactForm />
        </div>
        <div className='pb-4'>
            <CardComponent />
        </div>
        <div className="flex flex-col items-center justify-center gap-x-4 gap-y-3 py-8 text-center text-sm text-foreground xl:flex-row">
          <span className="opacity-50 flex">© 2024&nbsp;
            <div className="position:relative;white-space:pre-wrap;word-wrap:break-word">
              <span>0rbit.</span>
            </div>
          </span>
          <a target="_self" className="opacity-50 transition duration-200 hover:opacity-100" href="/privacy">All Rights Reserved</a>
          <a target="_self" className="opacity-50 transition duration-200 hover:opacity-100" href="/privacy">Privacy policy</a>
          <a target="_self" class="opacity-50 transition duration-200 hover:opacity-100" href="/terms">Terms of service</a>
        </div>
      </main>
    </div>
    </div>
  );
};

export default Footer;
