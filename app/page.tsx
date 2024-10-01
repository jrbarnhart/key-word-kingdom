export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-600 to-purple-800">
      {/* Logo / Title */}
      <h1 className="text-5xl font-bold text-white mb-8">Key Word Kingdom</h1>

      {/* Tagline */}
      <p className="text-lg text-gray-200 mb-12">
        Enter the kingdom and master the art of words!
      </p>

      {/* Call to Action */}
      <div className="space-y-4">
        <button className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-md shadow-lg">
          Start Game
        </button>
        <button className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-md shadow-lg">
          How to Play
        </button>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-4 text-gray-300">
        <p>© 2024 Key Word Kingdom</p>
      </footer>
    </div>
  );
}
