import Navbar from "../components/navbar/Navbar";
import UserProfile from "../components/teams/UserProfile";

export default function Home() {

  const profiles = [
    { location: 'url1', name: 'Person 1', role: 'Role 1' },
    { location: 'url2', name: 'Person 2', role: 'Role 2' },
    { location: 'url3', name: 'Person 3', role: 'Role 3' },
  ];
  
  return (
    <div className="inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
      <div className="bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]">
        <UserProfile profiles={profiles} />
      </div>
    </div>
  )
}