
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navigation */}
      <nav className="flex items-center justify-between bg-white px-8 py-5 shadow">
        <h1 className="text-2xl font-bold text-blue-600">
          IdeaTest
        </h1>

        <div className="flex items-center gap-6">
          <Link href="/" className="font-medium text-blue-600">
            Home
          </Link>
          <Link href="/explore" className="hover:text-blue-600">
            Explore Ideas
          </Link>
          <Link href="/submit" className="hover:text-blue-600">
            Submit Idea
          </Link>
          <Link
            href="/login"
            className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
          >
            Login
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-28 text-center">
        <h2 className="mb-6 text-5xl font-bold">
          Have an Idea? Test it here.
        </h2>

        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
          Share your ideas, discover new ideas and get feedback
          before you build.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            href="/explore"
            className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
          >
            Explore Ideas
          </Link>

          <Link
            href="/submit"
            className="rounded-lg border border-blue-600 px-6 py-3 text-blue-600 hover:bg-blue-50"
          >
            Submit Idea
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white px-6 py-16">
        <h2 className="mb-12 text-center text-3xl font-bold">
          How It Works
        </h2>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
          <div className="rounded-xl bg-gray-50 p-8 text-center shadow">
            <h3 className="mb-3 text-xl font-bold">1. Submit</h3>
            <p className="text-gray-600">
              Share your innovative ideas with others.
            </p>
          </div>

          <div className="rounded-xl bg-gray-50 p-8 text-center shadow">
            <h3 className="mb-3 text-xl font-bold">2. Discover</h3>
            <p className="text-gray-600">
              Explore ideas shared by other people.
            </p>
          </div>

          <div className="rounded-xl bg-gray-50 p-8 text-center shadow">
            <h3 className="mb-3 text-xl font-bold">3. Improve</h3>
            <p className="text-gray-600">
              Get feedback and improve your ideas.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 px-6 py-6 text-center text-white">
        <p>© 2026 IdeaTest. All rights reserved.</p>
      </footer>
    </main>
  );
}
