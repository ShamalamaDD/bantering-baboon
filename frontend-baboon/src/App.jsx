export default function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <div className="text-[5rem] animate-bounce">🦍</div>

      <h1 className="text-5xl font-extrabold text-baboonBlue drop-shadow-glow mt-2">
        Bantering Baboon
      </h1>

      <p className="mt-4 text-lg text-gray-300 max-w-md">
        A minimalist front-end crafted with <span className="text-baboonBlue">Tailwind 3</span> and Vite.<br />
        Sleek. Fast. Curious.
      </p>

      <button className="mt-8 px-6 py-3 bg-baboonBlue hover:bg-sky-500 text-black font-semibold rounded-xl shadow-glow transition-all duration-300">
        Start Bantering 🌀
      </button>
    </div>
  )
}
