import Sidebar from "@/components/Sidebar"
import Topbar from "@/components/Topbar"
import CampaignForm from "@/components/CampaignForm"

export default function CreateCampaignPage() {
  return (
    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <div className="ml-64 flex-1">

        <Topbar />

        <main className="p-10">

          <h1 className="text-5xl font-bold text-gray-800 mb-10">
            Create Campaign
          </h1>

          <CampaignForm />

        </main>

      </div>

    </div>
  )
}