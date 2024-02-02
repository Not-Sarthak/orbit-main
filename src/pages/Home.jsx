import Features from "../components/landing-page/Features";
import Hero from "../components/landing-page/Hero";
import Support from "../components/supported-by/Support";
import Services from "../components/services/Services";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <div className="inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
    <div className="bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]">
      <div className="flex flex-col gap-20">
        <div>
          <Hero />
        </div>
        <div>
          <Features />
        </div>
        <div>
          <Services />
        </div>
        <div>
          <Support />
          <Footer />
        </div>
      </div>
    </div>
    </div>
  )
}