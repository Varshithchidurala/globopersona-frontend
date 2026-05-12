import Sidebar from "@/components/Sidebar"
import Topbar from "@/components/Topbar"
import StatCard from "@/components/StatCard"
import CampaignTable from "@/components/CampaignTable"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      
      <Sidebar />

      <div className="ml-64 flex-1">

        <Topbar />

        <main className="p-10">

          <h1 className="text-6xl font-bold text-gray-800 mb-10">
            Campaign Analytics
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">

            <StatCard
              title="Total Campaigns"
              value="12"
            />

            <StatCard
              title="Emails Sent"
              value="24,500"
            />

            <StatCard
              title="Engagement Rate"
              value="78%"
            />

          </div>

          <CampaignTable />

        </main>

      </div>
    </div>
  )
}