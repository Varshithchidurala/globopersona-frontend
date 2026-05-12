import Sidebar from "@/components/Sidebar"
import Topbar from "@/components/Topbar"
import CampaignTable from "@/components/CampaignTable"

export default function CampaignsPage() {
  return (
    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <div className="ml-64 flex-1">

        <Topbar />

        <main className="p-10">

          <h1 className="text-5xl font-bold text-gray-800 mb-10">
            All Campaigns
          </h1>

          <CampaignTable />

        </main>

      </div>

    </div>
  )
}