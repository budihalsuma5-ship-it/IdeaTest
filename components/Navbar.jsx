
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white px-8 py-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">

        <h1 className="text-2xl font-bold">
          IdeaTest
        </h1>

        <div className="flex gap-6 items-center">
          <Link href="/">Home</Link>
          <Link href="/explore">Explore Ideas</Link>
          <Link href="/submit">Submit Idea</Link>
          <Link href="/login">Login</Link>
        </div>

      </div>
    </nav>
  );
}
