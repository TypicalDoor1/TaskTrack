import Image from "next/image";
import Navbar from '../components/Navbar'; 

export default function Home() {
  return (
    <div>
      <Navbar/>
      <main>
        <link rel="icon" href="public/favicon.jpg" />
        <h1 className="text-4xl font-bold">TaskTrack - Your productivity based calender app</h1>
        {/* Other content */}
      </main>
    </div>
  );
};