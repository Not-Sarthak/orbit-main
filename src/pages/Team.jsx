import UserProfile from "../components/teams/UserProfile";
import CardComponent from "../components/footer/CardComponent";

import lucifer from "../assets/lucifer.jpeg";
import sarthak from "../assets/sarthak.jpeg";
import megabyte from "../assets/megabyte.png";

export default function Home() {
  const profiles = [
    { location: lucifer, name: 'Ayush Agrawal', role: 'Backend and Infrastructure' },
    { location: sarthak, name: 'Sarthak Shah', role: 'Frontend Developer' },
    { location: megabyte, name: 'Megabyte', role: 'Smart Contract Developer' },
  ];

  return (
    <div className="flex items-center justify-center h-screen bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
      <div className="bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)] h-screen">
        <div className="flex justify-between flex-col gap-56">
          <div className="pt-20">  
            <h1 className="z-10 bg-gradient-to-br from-black via-stone-700 to-stone-500 bg-clip-text text-center font-display md:text-4xl text-2xl font-bold tracking-[-0.05em] text-transparent drop-shadow-sm [text-wrap:balance]">
              <div className="lg:flex flex-col hidden">
                <div>"Meet the team behind the goal of providing <br /> authenticated real-world data in a trustless manner"</div>
              </div>
              <div className="md:flex flex-col lg:hidden">
                <div>The Team behind 0rbit</div>
              </div>
            </h1>
            <div className="pt-10"> 
              <UserProfile profiles={profiles} />
            </div>
          </div>
          <div className="flex-col gap-10 lg:flex justify-center items-center">
            <div className="hidden lg:flex">
              <CardComponent />
            </div>
            <div className="flex flex-col items-center justify-center gap-x-4 pb-4 text-center text-sm text-foreground xl:flex-row">
            <span className="opacity-50 flex">© 2024&nbsp;
              <div className="position:relative;white-space:pre-wrap;word-wrap:break-word">
                <span>0rbit.</span>
              </div>
            </span>
            <a target="_self" className="opacity-50 transition duration-200 hover:opacity-100" href="/privacy">All Rights Reserved</a>
            <a target="_self" className="opacity-50 transition duration-200 hover:opacity-100" href="/privacy">Privacy policy</a>
            <a target="_self" class="opacity-50 transition duration-200 hover:opacity-100" href="/terms">Terms of service</a>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
