
export default function IdeaCard({ idea }) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-md border border-gray-200 hover:shadow-lg transition">

      <h2 className="text-xl font-bold text-gray-900 mb-3">
        {idea.title}
      </h2>

      <p className="text-gray-600 mb-4">
        {idea.description}
      </p>

      <span className="inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700">
        {idea.category}
      </span>

    </div>
  );
}
