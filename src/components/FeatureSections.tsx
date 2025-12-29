export function FeatureSection() {
  return (
    <section className="relative w-full h-[600px] lg:h-[700px] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1556906781-9a412961c28c?w=1920&q=80"
        alt="Nike Running"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="text-center text-white max-w-3xl">
          <p className="text-sm lg:text-base font-medium mb-4 tracking-wider uppercase">
            Move the World
          </p>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            RUN YOUR WORLD
          </h2>
          <p className="text-lg lg:text-xl mb-8 text-white/90">
            The latest innovation in running technology. Built for speed,
            designed for comfort.
          </p>
          <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-all transform hover:scale-105">
            Explore
          </button>
        </div>
      </div>
    </section>
  )
}