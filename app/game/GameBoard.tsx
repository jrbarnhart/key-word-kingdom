export default function GameBoard() {
  return (
    <div className="text-white flex flex-col items-center">
      <div className="max-w-lg w-full h-screen flex flex-col p-4 ">
        <div className="text-center mb-4">
          <h1 className="mt-16 text-2xl font-bold">Key Word Kingdom</h1>
          <div className="flex justify-between text-sm">
            <p>Score: 42069</p>
            <p>1:04</p>
          </div>
          <p className="text-blue-400 text-sm">Words: 6 1/3</p>
        </div>
        <div className="flex justify-center space-x-2 text-3xl mb-6">
          <span className="border-b-2 border-white px-2">T</span>
          <span className="border-b-2 border-white px-2">_</span>
          <span className="border-b-2 border-white px-2">_</span>
          <span className="border-b-2 border-white px-2">_</span>
          <span className="border-b-2 border-white px-2">_</span>
          <span className="border-b-2 border-white px-2">X</span>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 mb-6">
          <ul className="text-blue-400 space-y-1">
            <li>Word</li>
            <li>Another</li>
            <li>Thing</li>
          </ul>
        </div>
        <div className="mt-auto">
          <div className="grid grid-cols-3 gap-2 mb-2">
            <button className="bg-blue-500 rounded-lg py-2 text-xl">T</button>
            <button className="bg-blue-500 rounded-lg py-2 text-xl">A</button>
            <button className="bg-blue-500 rounded-lg py-2 text-xl">Y</button>
          </div>
          <div className="grid grid-cols-3 gap-2 mb-2">
            <button className="bg-blue-500 rounded-lg py-2 text-xl">W</button>
            <button className="bg-blue-500 rounded-lg py-2 text-xl">X</button>
            <button className="bg-blue-500 rounded-lg py-2 text-xl">R</button>
          </div>
          <div className="grid grid-cols-3 gap-2 mb-2">
            <button className="bg-blue-500 rounded-lg py-2 text-xl">U</button>
            <button className="bg-blue-500 rounded-lg py-2 text-xl">N</button>
            <button className="bg-blue-500 rounded-lg py-2 text-xl">F</button>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button className="bg-blue-500 rounded-lg py-2 text-xl">||</button>
            <button className="bg-blue-500 rounded-lg py-2 text-xl">
              Entr
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
