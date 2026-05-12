export default function StatCard({
  title,
  value,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">

      <h3 className="text-gray-500 text-sm font-semibold">
        {title}
      </h3>

      <p className="text-4xl font-bold text-gray-800 mt-4">
        {value}
      </p>

    </div>
  )
}