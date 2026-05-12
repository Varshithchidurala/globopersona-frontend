import Link from "next/link"
import {
  LayoutDashboard,
  Megaphone,
  PlusCircle,
} from "lucide-react"

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white fixed left-0 top-0 p-6">

      <h1 className="text-3xl font-bold mb-10 text-blue-400">
        GloboPersona
      </h1>

      <nav className="flex flex-col gap-6 text-lg">

        <Link
          href="/dashboard"
          className="flex items-center gap-3 hover:text-blue-400 transition"
        >
          <LayoutDashboard size={22} />
          Dashboard
        </Link>

        <Link
          href="/dashboard/campaigns"
          className="flex items-center gap-3 hover:text-blue-400 transition"
        >
          <Megaphone size={22} />
          Campaigns
        </Link>

        <Link
          href="/dashboard/create-campaign"
          className="flex items-center gap-3 hover:text-blue-400 transition"
        >
          <PlusCircle size={22} />
          Create Campaign
        </Link>

      </nav>
    </div>
  )
}