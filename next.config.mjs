import Link from "next/link"

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Link
        href="/dashboard"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg"
      >
        Open Dashboard
      </Link>
    </div>
  )
}