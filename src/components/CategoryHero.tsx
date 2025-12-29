
interface CategoryHeroProps {
  title: string
  subtitle: string
  description: string
  image: string
  ctaText?: string
}
export function CategoryHero({
  title,
  subtitle,
  description,
  image,
  ctaText = 'Shop Now',
}: CategoryHeroProps) {
  return (
    <section className="relative w-full h-[70vh] lg:h-[80vh] bg-black overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </div>

      <div className="relative h-full flex flex-col justify-end pb-16 lg:pb-24 px-6 lg:px-12 max-w-[1920px] mx-auto">
        <div className="max-w-2xl">
          <p className="text-white/80 text-sm lg:text-base font-medium mb-3 tracking-wider uppercase">
            {subtitle}
          </p>
          <h1 className="text-white text-4xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-tight">
            {title}
          </h1>
          <p className="text-white/90 text-base lg:text-lg mb-6 max-w-xl">
            {description}
          </p>
          <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-all transform hover:scale-105">
            {ctaText}
          </button>
        </div>
      </div>
    </section>
  )
}