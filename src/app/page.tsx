import Image from "next/image";
import Navbar from '../components/Navbar'; 

export default function Home() {
  return (
    <div>
      <Navbar/>
      <main>
        <h1 className="text-4xl font-bold">Welcome to Next.js!</h1>
        {/* Other content */}
      </main>
    </div>
  );
};