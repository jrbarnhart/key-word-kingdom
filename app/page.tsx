export default async function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-600 to-purple-800">
      {/* Logo / Title */}
      <h1 className="text-5xl font-bold text-white mb-8">Key Word Kingdom</h1>

      {/* Tagline */}
      <p className="text-lg text-gray-200 mb-12">
        Enter the kingdom and master the art of words!
      </p>

      {/* Footer */}
      <footer className="absolute bottom-4 text-gray-300">
        <a href={"https://www.joshuarbarnhart.com"}>My Portfolio</a>
      </footer>
    </div>
  );
}
