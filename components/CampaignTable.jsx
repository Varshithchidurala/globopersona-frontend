export default function CampaignTable() {
  const campaigns = [
    {
      id: 1,
      name: "Summer Sale Campaign",
      status: "Running",
      emails: 5000,
      engagement: "72%",
    },
    {
      id: 2,
      name: "Product Launch",
      status: "Completed",
      emails: 3200,
      engagement: "81%",
    },
    {
      id: 3,
      name: "Festival Offers",
      status: "Scheduled",
      emails: 8700,
      engagement: "65%",
    },
  ]

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Campaign Performance
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-4">Campaign</th>
              <th className="p-4">Status</th>
              <th className="p-4">Emails Sent</th>
              <th className="p-4">Engagement</th>
            </tr>
          </thead>

          <tbody>
            {campaigns.map((campaign) => (
              <tr
                key={campaign.id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="p-4 font-medium">{campaign.name}</td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      campaign.status === "Running"
                        ? "bg-green-100 text-green-700"
                        : campaign.status === "Completed"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {campaign.status}
                  </span>
                </td>

                <td className="p-4">{campaign.emails}</td>

                <td className="p-4 font-semibold text-gray-700">
                  {campaign.engagement}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}