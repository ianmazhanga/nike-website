export function Hero() {
  return (
    <section className="relative w-full h-screen bg-black overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1920&q=80"
          alt="Nike Sneaker"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end pb-20 lg:pb-32 px-6 lg:px-12 max-w-[1920px] mx-auto">
        <div className="max-w-2xl">
          <p className="text-white/80 text-sm lg:text-base font-medium mb-4 tracking-wider uppercase">
            Just In
          </p>
          <h1 className="text-white text-5xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight">
            AIR MAX PULSE
          </h1>
          <p className="text-white/90 text-lg lg:text-xl mb-8 max-w-xl">
            Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
            Pulse—designed to push you past your limits.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-all transform hover:scale-105">
              Shop Now
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-black transition-all">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}