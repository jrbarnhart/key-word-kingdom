export default function User() {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        {/* User Info and Stats Section */}
        <div className="bg-white shadow-lg rounded-lg p-8 mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Your Stats</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Stat Card 1 */}
            <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-2">Games Played</h3>
              <p className="text-4xl font-bold">24</p>
            </div>
            {/* Stat Card 2 */}
            <div className="bg-green-500 text-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-2">High Score</h3>
              <p className="text-4xl font-bold">4500</p>
            </div>
            {/* Stat Card 3 */}
            <div className="bg-red-500 text-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-2">Kingdom Rank</h3>
              <p className="text-4xl font-bold">#12</p>
            </div>
          </div>
        </div>

        {/* Friends Section */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Your Friends
          </h2>

          {/* Friends List */}
          <ul className="space-y-4">
            <li className="bg-gray-200 p-4 rounded-lg flex items-center justify-between">
              <span className="text-xl font-semibold">Friend 1</span>
              <span className="text-gray-600">Online</span>
            </li>
            <li className="bg-gray-200 p-4 rounded-lg flex items-center justify-between">
              <span className="text-xl font-semibold">Friend 2</span>
              <span className="text-gray-600">Offline</span>
            </li>
            <li className="bg-gray-200 p-4 rounded-lg flex items-center justify-between">
              <span className="text-xl font-semibold">Friend 3</span>
              <span className="text-gray-600">In Game</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
