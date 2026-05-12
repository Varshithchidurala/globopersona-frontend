export default function CampaignForm() {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-md w-full max-w-3xl">

      <form className="space-y-6">

        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Campaign Name
          </label>

          <input
            type="text"
            placeholder="Enter campaign name"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Email Subject
          </label>

          <input
            type="text"
            placeholder="Enter email subject"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Email Content
          </label>

          <textarea
            rows="6"
            placeholder="Write your email content..."
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition"
        >
          Create Campaign
        </button>

      </form>

    </div>
  )
}