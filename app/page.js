import Link from "next/link"

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Link href="/dashboard">
        Go to Dashboard
      </Link>
    </div>
  )
}